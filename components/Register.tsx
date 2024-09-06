import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
interface Register {
    email: string;
    password: string;
    confirmPassword: string;
}
export default function Register() {
    const initialValues: Register = {
        email: '',
        password: '',
        confirmPassword: ''
    };
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: Yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
          .required('Vui lòng xác nhận mật khẩu')
    });
    
    const handleSubmit = (values: Register) => {
        console.log(values);
        // Xử lý đăng ký tại đây
    };
  return (
    <div>
      <h2>Đăng ký</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Mật khẩu:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>Xác nhận mật khẩu:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <button type="submit">Đăng ký</button>
        </Form>
      </Formik>
    </div>
  )
}
