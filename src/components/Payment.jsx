import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const Payment = () => {
  return (
    <Formik
      initialValues={{
        // Existing initial values...
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
      }}
      validationSchema={Yup.object().shape({
        // Existing validation schema...
        cardNumber: Yup.string()
          .required("Card number is required")
          .matches(/^\d{16}$/, "Card number must be a 16-digit number"),
        cardExpiry: Yup.string()
          .required("Expiration date is required")
          .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiration date"),
        cardCvc: Yup.string()
          .required("CVC is required")
          .matches(/^\d{3}$/, "CVC must be a 3-digit number"),
      })}
      onSubmit={(values) => {
        // Handle form submission...
      }} 
    >
      {({ values, touched, errors, handleChange, handleBlur }) => (
        <Form className="form-finish">
          <div className="field-wrapper">
            <p>Card Number *</p>
            <Field
              type="text"
              name="cardNumber"
              placeholder="Enter card number"
              onChange={(e) => {
                const { value } = e.target;
                const formattedValue = value.replace(/\s/g, "").trim();
                handleChange({
                  target: {
                    name: "cardNumber",
                    value: formattedValue,
                  },
                });
              }}
              onBlur={handleBlur}
              value={values.cardNumber}
              className={
                errors.cardNumber && touched.cardNumber
                  ? "text-input error"
                  : "text-input"
              }
            />
            <ErrorMessage
              name="cardNumber"
              component="div"
              className="input-feedback"
            />
          </div>

          <div className="field-wrapper">
            <p>Expiration Date *</p>
            <Field
              type="text"
              name="cardExpiry"
              placeholder="MM/YY"
              onChange={(e) => {
                const { value } = e.target;
                const formattedValue = value
                  .replace(/\s/g, "")
                  .replace(/(\d{2})(\d{1,2})/, "$1/$2")
                  .trim();
                handleChange({
                  target: {
                    name: "cardExpiry",
                    value: formattedValue,
                  },
                });
              }}
              onBlur={handleBlur}
              value={values.cardExpiry}
              className={
                errors.cardExpiry && touched.cardExpiry
                  ? "text-input error"
                  : "text-input"
              }
            />
            <ErrorMessage
              name="cardExpiry"
              component="div"
              className="input-feedback"
            />
          </div>

          <div className="field-wrapper">
            <p>CVC *</p>
            <Field
              type="text"
              name="cardCvc"
              placeholder="Enter CVC"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardCvc}
              className={
                errors.cardCvc && touched.cardCvc
                  ? "text-input error"
                  : "text-input"
              }
            />
            <ErrorMessage
              name="cardCvc"
              component="div"
              className="input-feedback"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Payment;
