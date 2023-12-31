import React, { useState } from "react";
import "./contact-form.scss";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Spacer from "../../../common/spacer/spacer";
import Contact from "../contact-info/contact-info";
import * as Yup from "yup";
import { useFormik } from "formik";
import Spinner from "react-bootstrap/Spinner";
import "./contact-form.scss";
import { sendMessage } from "../../../../api/contact-service";
import { toasts } from "../../../../helpers/functions/swal";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    body: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string()
    .email("Enter valid email")
    .required("Enter your email"),
    subject: Yup.string()
      .max(50, "The subject should be max 50 chars")
      .min(5, "The subject should be at least 5 chars")
      .required("Enter a subject"),
    body: Yup.string()
      .max(200, "The message should be max 200 chars")
      .min(20, "The message should be at least 20 chars")
      .required("Enter a message"),
  });
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await sendMessage(values);
      formik.resetForm();
      toasts("Your message has been sent successfully", "success");
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Container>
      <Row className="gy-5">
        <Col md={6}>
          <p>
            Established in 2014 in the heart of San Francisco, Pick&Drive
            emerged from the vision of two experienced travellers, Johnathan
            Price and Melanie Ross. Having navigated the complexities and
            frustrations of traditional car rentals during their numerous
            journeys, they felt compelled to revolutionize the experience for
            fellow travellers.
          </p>
          <Spacer height={30} />
          <Contact />
        </Col>
        <Col md={6}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && !!formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                {...formik.getFieldProps("subject")}
                isInvalid={formik.touched.subject && !!formik.errors.subject}
                isValid={formik.touched.subject && !formik.errors.subject}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.subject}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter message"
                {...formik.getFieldProps("body")}
                isInvalid={formik.touched.body && !!formik.errors.body}
                isValid={formik.touched.body && !formik.errors.body}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.body}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="info"
              type="submit"
              disabled={!(formik.dirty && formik.isValid) || loading}
            >
              {loading && (
                <Spinner animation="border" variant="secondary" size="sm" />
              )}
              Send message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
