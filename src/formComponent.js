import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormComponent = () => (
  <div>
    <Formik
      initialValues={{ address: { city: '', country: ''} }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          Country
          <Field type="address" name="address.country" />
          City
          <Field type="address" name="address.city" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;