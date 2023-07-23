import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toasts } from "../../../helpers/functions/swal";
import * as Yup from "yup";
import PasswordInput from "../password-input/password-input";
import {getUser, login} from "../../../api/user-service"
import { encryptedLocalStorage } from "../../../helpers/functions/encrypt-storage";
import { useAppDispatch } from "../../../store/slices/hooks";
import { loginFailed, loginSuccess } from "../../../store/slices/auth-slice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const dispatch=useAppDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Please provide at least 8 characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[0-9]+/, "One number")
      .matches(/[!@#$%^&*.]+/, "One special character"),
  });
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const respAuth= await login(values);
      encryptedLocalStorage.setItem("token",respAuth.data.token);
      console.log(respAuth.data);

      const respUser=await getUser();
      dispatch(loginSuccess(respUser.data));
      navigate("/");
      
    } catch (err) {
      dispatch(loginFailed());
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

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <PasswordInput
          {...formik.getFieldProps("password")}
          isValid={formik.touched.password && !formik.errors.password}
          isInvalid={formik.touched.password && !!formik.errors.password}
          error={formik.errors.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
