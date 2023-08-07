import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import PasswordInput from '../../common/password-input/password-input';
import ReactInputMask from 'react-input-mask-next';
import { Alert, Button, ButtonGroup, Col, Form, Row, Spinner } from 'react-bootstrap';
import { question, toasts } from '../../../helpers/functions/swal';
import Loading from '../../../pages/common/loading';
import { deleteUserById, getUserById, updateUserById } from '../../../api/user-service';
import { useParams, useNavigate } from 'react-router-dom';

const AdminUsersEdit = () => {
    const [loading, setLoading] = useState(true)
    const [deleting, setDeleting] = useState(false) //delete butonunun loadingi
    const [updating, setUpdating] = useState(false) //update butonunun loadingi
    const {userId} = useParams()
    const navigate= useNavigate()
    const [initialValues, setInitialValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      roles:[],
      builtIn:false //bunu backendde bazı yerleri kimse girip değiştiremesin diye yazmışlar
    });                     //farklı oldu dikkat
  
    const validationSchema = Yup.object({
      firstName: Yup.string().required("Please enter your first name"),
      lastName: Yup.string().required("Please enter your last name"),
      email: Yup.string().email("Please enter a valid email address").required("Please enter an email address"),
      password: Yup.string()
      .min(8, "Please provide at least 8 characters")
      .matches(/[a-z]+/,"One lowercase character")
      .matches(/[A-Z]+/,"One uppercase character")
      .matches(/[@$!%*#?&.]+/,"One special character")
      .matches(/\d+/,"One number"),
      phoneNumber: Yup.string()
      .required("Please enter your phone number")
      .test("includes_", "Please enter a valid phone number", (val) => val && !val.includes("_")), //boşgeçince ya da alakasız girince kabul etmesin diye yazdık bunu."includes_" bizim verdiğimiz bir isim. alt çizgi içeriyor mu diye isiim verdik. virgülden sonraki yazı hata alma durumdaki yazı. sonraki virgünlden sonrası sağlamasını istediğimiz yer. kontrol ettiğimiz doluysa ve alt çizgi iiçermiyorsa doğru.
      address: Yup.string().required("Please enter your address"),
      zipCode: Yup.string().required("Please enter your zip code"),
      roles: Yup.array().test("role_check", "Please select a role", (val)=> val.length>0) // bu bir array. bi ya da iki rolu olsun istiyorum. o yüzden lenght>0
    })
  
    const onSubmit = async(values) => {
        if(!values.password){       //şifresini değiştirmek istemiyorsa pasword hiç gelmemeli diye ayarlamış backend
            delete values.password
        }
      setUpdating(true);
      try {
        await updateUserById(userId, values);
        toasts("User was updated", "success")
      } catch (err) {
        toasts(err.response.data.message,"error")    /* message ya da msg gibi bunun adını backend belirler */    
      }
      finally{
        setUpdating(false)
      }
    }
  
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
      enableReinitialize: true          //dikkat bu kısım güncellenebilir olsun dedik
    })
    
    const loadData =async()=>{
        setLoading(true)
        try {
            const resp=await getUserById(userId)
            setInitialValues({...resp.data, password:""})                     
        } catch (err) {
            console.log(err);
        } finally{
            setLoading(false)
        }
    }
    const removeUser=async()=>{
        setDeleting(true)
        try {
          await deleteUserById(userId)
          toasts("User was deleted", "success")
          navigate(-1)
        } catch (err) {
          console.log(err);
          toasts(err.response.data.message, "error")
        } finally{
          setDeleting(false)
        }
      }
      const handleDelete = ()=>{
        question("Are you sure to delete?", "You won't be able to undo it!").then((result)=>{
          if(result.isConfirmed){
            removeUser()
          }
        })
      }
   useEffect(() => {
   loadData()
    }, [])
    
  return (
    loading ? <Loading/> : 
    <Form noValidate onSubmit={formik.handleSubmit}>
      <fieldset disabled={formik.values.builtIn}>
        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <Form.Group as={Col} className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                {...formik.getFieldProps("firstName")} 
                isValid={formik.touched.firstName && !formik.errors.firstName} 
                isInvalid={formik.touched.firstName && !!formik.errors.firstName} 
                />
                <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
            </Form.Group>           
            <Form.Group as={Col} className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" 
                {...formik.getFieldProps("lastName")} 
                isValid={formik.touched.lastName && !formik.errors.lastName} 
                isInvalid={formik.touched.lastName && !!formik.errors.lastName} 
                />
                <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
            </Form.Group>      
            <Form.Group as={Col} className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" 
                as={ReactInputMask}
                mask="(999) 999-9999"
                {...formik.getFieldProps("phoneNumber")} 
                isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber} 
                isInvalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber} 
                />
                <Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
            </Form.Group>  
            <Form.Group as={Col} className="mb-3"> {/* emaili değştiremesin diye disabled */}
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" 
                {...formik.getFieldProps("email")} 
                isValid={formik.touched.email && !formik.errors.email} 
                isInvalid={formik.touched.email && !!formik.errors.email} 
                disabled
                />
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>     
            <Form.Group as={Col} className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" 
                {...formik.getFieldProps("address")} 
                isValid={formik.touched.address && !formik.errors.address} 
                isInvalid={formik.touched.address && !!formik.errors.address} 
                />
                <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Label> Zip Code</Form.Label>
                <Form.Control type="text" 
                {...formik.getFieldProps("zipCode")} 
                isValid={formik.touched.zipCode && !formik.errors.zipCode} 
                isInvalid={formik.touched.zipCode && !!formik.errors.zipCode} 
                />
                <Form.Control.Feedback type="invalid">{formik.errors.zipCode}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Label>Password</Form.Label>
            <PasswordInput {...formik.getFieldProps("password")}     /* passwordınput componentine bu bilgileri props olarak gönderdik. erroru da göndermek için error = diye birşey yazdık */
                isValid={formik.touched.password && !formik.errors.password} 
                isInvalid={formik.touched.password && !!formik.errors.password} 
                error={formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
                <Form.Label>Roles</Form.Label>
                <Form.Check 
                    label="Customer" 
                    type='checkbox' 
                    name='roles' 
                    value="Customer"
                    checked={formik.values.roles.includes("Customer")}
                    onChange={formik.handleChange}
                    isValid={formik.touched.roles && !formik.errors.roles} 
                    isInvalid={formik.touched.roles && !!formik.errors.roles} 
                />
                <Form.Check 
                    label="Administrator" 
                    type='checkbox' 
                    name='roles' 
                    value="Administrator"
                    checked={formik.values.roles.includes("Administrator")}
                    onChange={formik.handleChange}
                    isValid={formik.touched.roles && !formik.errors.roles} 
                    isInvalid={formik.touched.roles && !!formik.errors.roles} 
                    feedback={formik.errors.roles}
                    feedbackType="invalid"
                />
            </Form.Group>
        </Row>
      </fieldset>
      {formik.values.builtIn && <Alert variant='warning'>Built-in accounts cannot be deleted or update</Alert>}
      <div className='text-end'>
        <ButtonGroup>
            <Button variant='secondary' onClick={()=>navigate(-1)}>Cancel</Button>
            {!formik.values.builtIn && (
                <>
                    <Button variant='primary' type='submit' disabled={updating}>{updating && <Spinner variant='border' size='sm'/>} Update</Button>
                    <Button variant='danger' onClick={handleDelete} disabled={deleting}>{deleting && <Spinner variant='border' size='sm'/>} Delete</Button>
                </>
            )}   
        </ButtonGroup>
      </div>
    </Form>
  )
}
export default AdminUsersEdit