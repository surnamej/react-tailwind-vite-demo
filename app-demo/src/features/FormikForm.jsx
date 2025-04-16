import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '../style_components/Button'; // Update your Button component's styling if needed

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    name: '',
    email: '',
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  // Handle form submission
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form data:', values);
    // Simulate a server request
    setTimeout(() => {
      alert(`Form submitted:\n${JSON.stringify(values, null, 2)}`);
      setSubmitting(false);
      resetForm();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Formik Form Example</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      
      <br />
      <Link to="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home 
      </Link>
    </div>
  );
};

export default FormikForm;
