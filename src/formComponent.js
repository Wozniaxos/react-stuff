import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

const FormComponent = () => (
  <div>
    <Formik
      initialValues={{ address: { city: '', country: ''}, items: [] }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          Country
          <Field name="address.country" />
          City
          <Field name="address.city" />
          Array Field
          <FieldArray 
            name="items" 
            render={arrayHelpers => (
              <div>
                {values.items.map((_, index) => (
                  <div key={index}>
                  <Field name={`friends.${index}`} />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </div>
                ))}

                <button type="button" onClick={() => arrayHelpers.push('')}>
                  Add item
                </button>
              </div>
            )}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;