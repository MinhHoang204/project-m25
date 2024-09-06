import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
interface Login {
    email: string;
    password: string;
}
export default function Login() {
    const initialValues: Login = {
        email: '',
        password: ''
    };
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: Yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu')
    });
    
    const handleSubmit = (values: Login) => {
        console.log(values);
        // Xử lý đăng nhập tại đây
    };
  return (
    <div>
      <h2>Đăng nhập</h2>
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
          <button type="submit">Đăng nhập</button>
        </Form>
      </Formik>
    </div>
  )
}
