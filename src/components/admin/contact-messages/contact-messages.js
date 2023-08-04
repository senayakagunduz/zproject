import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { getMessagesByPage } from '../../../api/contact-service';
import { useNavigate } from 'react-router-dom';
const columns = [
  {
      name: 'Subject',
      selector: row => row.subject,  //olması gerek tablomuzda subjectin karışısına, networkten contentin içinde subject geldi
      sortable: true,     //sıralama yapmayı sağlayan da bu
  },
  {
      name: 'Visitor',
      selector: row => row.name,      //burda da name gelmeli
      sortable: true,
  },
];
const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);  //bu, loading ve altındaki state i data-table sayfasında pagination yapmak için yaptığını gördük. o yüzden yapıyoruz
  const [perPage, setPerPage] = useState(10); //sayfa başına kaç kayıt verecek
  const navigate=useNavigate()
  const loadData=async(page)=>{
      try {
          const resp=await getMessagesByPage(page,perPage);
          const {content,totalElements} = resp.data
          setMessages(content)
          setTotalRows(totalElements) //networkten baktık. bizde total rows, totalelementten geliyormuş
      } catch (err) {
          console.log(err);
      } finally{
          setLoading(false);
      }
  }
  const handlePerRowsChange=async(newPerPage, page)=>{  // backendimiz 0tabanlı olduğu için gelen page değerini -1yaptık
      try {
          const resp=await getMessagesByPage(page-1,newPerPage);
          const {content} = resp.data
          setMessages(content)
          setPerPage(newPerPage)
      } catch (err) {
          console.log(err);
      } finally{
          setLoading(false);
      }
  }
  const handlePageChange = (page) => {
      loadData(page-1);
  }
  const handleRowClicked = (row) =>{  // hangi satıra tıklarsan ona gider. bu data-table-componentinin sayfasında vardı
      /* console.log(row); */
      navigate(`/admin/contact-messages/${row.id}`)
  }
  useEffect(() => {
      loadData(0)
  }, [])
return (
  <div>
      <DataTable title="Contact Messages"
      columns={columns}
      data={messages}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      onRowClicked={handleRowClicked}  /* onRowClicked herhangibir satıra tıklandığında gitsin demek */
      />
  </div>
)
}
export default ContactMessages