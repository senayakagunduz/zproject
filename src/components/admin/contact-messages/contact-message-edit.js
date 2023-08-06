import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Spinner } from 'react-bootstrap'
import { deleteMessage, getMessage } from '../../../api/contact-service';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../common/loading/loading';
import { question, toasts } from '../../../helpers/functions/swal';

const ContactMessageEdit = () => {
    const[message,setMessages]=useState({});
    const[loading, setLoading]=useState(true);
    const[deleting, setDeleting]=useState(false);
    const {messageId}=useParams();//custom routes da ner verdiysek onları parametre olarak yazıcam
    const navigate=useNavigate();
    const loadData=async()=>{
       try {
         const resp=await getMessage(messageId);//url den gelen messageId yi yerleştirdim
         console.log(resp.data)
         setMessages(resp.data);
       } catch (error) {
        console.log(error);
       }
       finally{
        setLoading(false);
       }
    }
    const removeMessage=async()=>{
        setDeleting(true);
        try {
            await deleteMessage(messageId);
            toasts("Message was deleted","success");
            navigate(-1);
        } catch (error) {
            console.log(error);
            toasts(error.reponse.data.message,"error");
        }
        finally{
            setDeleting(false);
        }
    }
    const handleDelete=async()=>{
        question("Are you sure to delete", "You won't be able to undo it!").then((result)=>{
        if(result.isConfirmed){
            removeMessage();
        }
       })
    }
    useEffect(()=>{
        loadData();
    },[])
  return (
    <div>
        {loading ? (<Loading/>) : (
        <>
        <h2>{message.subject}</h2>
        <p>{message.body}</p>
        <hr/>
        <p>
            <em>{message.name} - {message.email}</em>
        </p>
        <div className='text-end'>
            <ButtonGroup aria-label="Toolbox">
                <Button variant='primary' onClick={()=>navigate(-1)}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete} disabled={deleting}>
                    {deleting && <Spinner animation="border" size="sm"/>}Delete</Button>
            </ButtonGroup>
        </div>
        </>)}
        
    </div>
  )
}

export default ContactMessageEdit