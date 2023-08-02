import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";
import ReactInputMask from "react-input-mask-next";
import { useAppSelector } from "../../../store/slices/hooks";
import { updateUser } from "../../../api/user-service";
import { toasts } from "../../../helpers/functions/swal";

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector(state => state.auth.user); //Redux daki user bilgilerini inputlara bastırıcaz
  const {firstName, lastName,phoneNumber,address, zipCode,email}=user;
  const initialValues = {
    firstName,
    lastName,
    phoneNumber,
    address,
    zipCode,
    email,
  };
  const validationSchema = yup.object({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    phoneNumber: yup
      .string()
      .required("Please enter your phone number")
      .test(
        "includes_",
        "Please enter your phone number",
        (val) => val && !val.includes("_")
      ),
    address: yup.string().required("Please enter your address"),
    zipCode: yup.string().required("Please enter your zip code"),
    email: yup.string().email().required("Please enter your email"),
  });
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await updateUser(values);
      toasts("Profile was updated","success")  
    } catch (error) {
      toasts(error.response.data.message,"error");
    }
    finally{
        setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit, 
  });

  return (
    <Container>
      <Row>
        <Col>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("firstName")}
                isValid={formik.touched.firstName && !formik.errors.firstName}
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                as={ReactInputMask}
                mask="(999) 999-9999"
                {...formik.getFieldProps("phoneNumber")}
                isValid={
                  formik.touched.phoneNumber && !formik.errors.phoneNumber
                }
                isInvalid={
                  formik.touched.phoneNumber && !!formik.errors.phoneNumber
                }
              />

              <Form.Control.Feedback type="invalid">
                {formik.errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
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

            <Button variant="primary" type="submit" className="mb-3 mt-3">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileForm;
