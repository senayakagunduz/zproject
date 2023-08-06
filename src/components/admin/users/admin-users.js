import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { downloadUsers, getUsersByPage } from '../../../api/user-service';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import fileDownload from 'js-file-download';

const columns = [
    {
        name: "First Name",
        selector: (row) => row.firstName,
    },
    {
        name: "Last Name",
        selector: (row) => row.lastName,
    },
    {
        name: "Email",
        selector: (row) => row.email,
    },
    {
        name: "Roles",
        selector: (row) => row.roles.join("-"),
    }
]
const AdminUsers = () => {
    const [loading, setLoading] = useState(false);
    const [downloading, setDownloading]=useState(false);
    const [users, setUsers] = useState([]);
    const [totalRows, setTotalRows]=useState(0);
    const [perPage, setPerPage]=useState(10);
    const navigate=useNavigate();

    const loadData = async (page) => {
        try {
            const resp = await getUsersByPage(page);
            const {content,totalElements}=resp.data;
            setUsers(content);
            setTotalRows(totalElements);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }
    const handleChangePage=(page)=>{
        //data table komponenti sayfa yapıısnda 1  tabanlı çalışırken api 0 tabanlı çalışıyor
        loadData(page-1);
    }
    const handleChangeRowsPerPage=async(newPerPage,page)=>{
        console.log(newPerPage);
        try {
            const resp=await getUsersByPage(page-1, newPerPage);
            
            const {content}=resp.data;
            setUsers(content);
            setPerPage(newPerPage);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }
    const handleRowClicked=(row)=>{
        navigate(`/admin/users/${row.id}`);
    }
    const handleDownload=async()=>{
        //js file download kütüphanesini kullanıyoruz fakat backend den çekicez,
        //userları bize excel formatında direk download ederek verecek
       setDownloading(true);
       try {
        const resp=await downloadUsers();
        console.log(resp.data);
        fileDownload(resp.data,`users.xlsx`);
       } catch (error) {
            console.log(false);
       } finally{
        setDownloading(false);
       }


    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <div>
            <Button variant="secondary" onClick={handleDownload} disabled={downloading}>{downloading && <Spinner animation="border" size="sm"/>}Download Users</Button>
            <DataTable
                title="Users"
                columns={columns}
                data={users}
                progressPending={loading}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onChangePage={handleChangePage}
                onRowClicked={handleRowClicked}
            />
        </div>
    )
}

export default AdminUsers