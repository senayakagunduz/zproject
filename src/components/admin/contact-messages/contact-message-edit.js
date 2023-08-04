import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { getMessage } from '../../../api/contact-service';
import { useParams } from 'react-router-dom';
import Loading from '../../common/loading/loading';
import { question } from '../../../helpers/functions/swal';

const ContactMessageEdit = () => {
    const[message,setMessages]=useState({});
    const[loading, setLoading]=useState(true);
    const {messageId}=useParams();//custom routes da ner verdiysek onları parametre olarak yazıcam

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
    const removeMessage=()=>{

    }
    const handleDelete=()=>{
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
                <Button variant='primary' onClick={handleDelete}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </ButtonGroup>
        </div>
        </>)}
        
    </div>
  )
}

export default ContactMessageEdit