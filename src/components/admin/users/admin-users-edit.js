import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup";
import PasswordInput from '../../common/password-input/password-input';
import ReactInputMask from 'react-input-mask-next';
import { Col, Form, Row } from 'react-bootstrap';
import { toasts } from '../../../helpers/functions/swal';

const AdminUsersEdit = () => {
    const [loading, setLoading] = useState(false);
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        roles: [],
        builtIn: false //bazı kayıtların değiştilimesi ve silinmesini engellemek için kullanıyoruz
    };
    const validationSchema = Yup.object({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        email: Yup.string().required("Please enter your email"),
        password: Yup.string()
            .required("Please enter your password")
            .min(8, "Please provide at least 8 characters")
            .matches(/[a-z]+/, "One lowercase character")
            .matches(/[A-Z]+/, "One uppercase character")
            .matches(/[0-9]+/, "One number")
            .matches(/[!@#$%^&*.]+/, "One special character"),
        phoneNumber: Yup.string()
            .required("Please enter your phone number")
            // {/*custom bir fonk .test, "includes_" fonk adı,  logic olumsuz olursa soldaki mesajı gösterecek, 
            //arrow func, phone number alır eğer doluysa ikinci logic e geçer, alt çizgi içermezse soldaki mesajı verecek, kısaca tel num, tam doldurulmasını istiyor */}
            .test("includes_", "Please enter your phone number", (val) => val && !val.includes("_")),
        address: Yup.string().required("Please enter your address"),
        zipCode: Yup.string().required("Please enter your zip code"),
    });
    const onSubmit = async (values) => {
        setLoading(true);
        // setKey("register");
        try {

            formik.resetForm();
        } catch (err) {
            toasts(err.response.data.message, "error");
        } finally {
            setLoading(false);
        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <Form noValidate onSubmit={formik.handleSubmit} className="p-4">
            <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3'>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...formik.getFieldProps("firstName")}
                        isValid={formik.touched.firstName && !formik.errors.firstName}
                        isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...formik.getFieldProps("lastName")}
                        isValid={formik.touched.lastName && !formik.errors.lastName}
                        isInvalid={formik.touched.lastName && !!formik.errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        as={ReactInputMask}
                        mask="(999) 999-9999"
                        {...formik.getFieldProps("phoneNumber")}
                        isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
                        isInvalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        {...formik.getFieldProps("address")}
                        isValid={formik.touched.address && !formik.errors.address}
                        isInvalid={formik.touched.address && !!formik.errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.address}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                        type="text"
                        {...formik.getFieldProps("zipCode")}
                        isValid={formik.touched.zipCode && !formik.errors.zipCode}
                        isInvalid={formik.touched.zipCode && !!formik.errors.zipCode}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.zipCode}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        {...formik.getFieldProps("email")}
                        isValid={formik.touched.email && !formik.errors.email}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <PasswordInput
                        {...formik.getFieldProps("password")}
                        isValid={formik.touched.password && !formik.errors.password}
                        isInvalid={formik.touched.password && !!formik.errors.password}
                        error={formik.errors.password}
                    />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Roles</Form.Label>
                    <Form.Check 
                    label="Customer" 
                    type="checkbox" 
                    name="roles" 
                    value="Customer"
                    checked={formik.values.roles.includes("Customer")}
                    onChange={formik.handleChange}
                    />

                    <Form.Check 
                    label="Administrator" 
                    type="checkbox" 
                    name="roles" 
                    value="Administrator"
                    checked={formik.values.roles.includes("Administrator")}
                    onChange={formik.handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                        {formik.errors.roles}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

        </Form>
    )
}

export default AdminUsersEdit