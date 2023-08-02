import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import PasswordInput from "../../common/password-input/password-input";
import { updatePassword } from "../../../api/user-service";
import { toasts } from "../../../helpers/functions/swal";
const PasswordForm = () => {
    const [loading,setLoading]=useState(false);

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    // confirmNewPassword: "",
  };
  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Please enter your password"),
    newPassword: Yup.string()
      .required("Please enter your new password"),
    //   .min(8,"Must be at least 8 characters")
    //   .matches(/[a-z]+/,"One lowercase characters")
    //   .matches(/[A-Z]+/,"One uppercase characters")
    //   .matches(/[0-9]+/,"One number")
    //   .matches(/[@$!%*#?&]/, "One special character"),
    confirmNewPassword: Yup.string()
      .required("Please re-enter your new password")
      //password confirmPassword ile eşleşiyor mu ona bakıyor
      .oneOf([Yup.ref("newPassword")], "Password field doesn't match"),
  });
  const onSubmit=async(values)=>{
    setLoading(true);
    try {
       await updatePassword(values);
       toasts("Password was updated","success")
    } catch (error) {
       toasts(error.response.data.message,"error"); 
    }
    finally{
        setLoading(false);
    }
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Current Password</Form.Label>
          <PasswordInput
            {...formik.getFieldProps("oldPassword")}
            isValid={formik.touched.oldPassword && !formik.errors.oldPassword}
            isInvalid={formik.touched.oldPassword && !!formik.errors.oldPassword}
            error={formik.errors.oldPassword}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <PasswordInput
            {...formik.getFieldProps("newPassword")}
            isValid={formik.touched.newPassword && !formik.errors.newPassword}
            isInvalid={formik.touched.newPassword && !!formik.errors.newPassword}
            error={formik.errors.newPassword}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <PasswordInput
            {...formik.getFieldProps("confirmNewPassword")}
            isValid={
              formik.touched.confirmNewPassword && !formik.errors.confirmNewPassword
            }
            isInvalid={
              formik.touched.confirmNewPassword && !!formik.errors.confirmNewPassword
            }
            error={formik.errors.confirmNewPassword}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
          {loading && <Spinner animation="border" size="sm" />}Update
        </Button>
      </Form>
    </div>
  );
};

export default PasswordForm;
