import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const YourInformation = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        select: "",
        Company: "",
        name: "",
        timeframe: "",
        zipcode: "",
        lastname: "",
        steetAdress: "",
        City: "",
        phone: "",
        Country: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name cannot be empty"),
        steetAdress: Yup.string().required("Please enter Address"),
        City: Yup.string().required("Enter City"),
        phone: Yup.string()
          .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number")
          .required("Phone number is required"),
        select: Yup.string().required("Please select an option"),
        Company: Yup.string().required("Company cannot be empty"),
        timeframe: Yup.string().required("Please select an option"),
        zipcode: Yup.string("Invalid Zip")
          .required("Enter Zip code")
          .min(4, "Invalid Zip"),
        lastname: Yup.string().required("Last Name cannot be empty"),
        email: Yup.string()
          .email("Looks like this is not an email")
          .required("Required"),
          Country: Yup.string()
          .required("Enter Country"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            "Password requires a special character and uppercase letter"
          )
          .required("Password cannot be empty"),
      })}
      onSubmit={(values) => {
        console.log(values);
        // Handle form submission
      }}
    >
      {({ values, touched, errors, handleChange, handleBlur, setFieldValue }) => (
        <Form>
          <div className="insides-wrapper">
            <div className="inside-wrapper">
              <div className="field-wrapper">
                <p>Email *</p>
                <Field
                  placeholder="your@email.com"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="input-feedback"
                />
              </div>
              <div className="field-wrapper">
                <p>Street Address *</p>
                <Field
                  id="steetAdress"
                  name="steetAdress"
                  placeholder="Enter Street Address"
                  type="text"
                  className={
                    errors.steetAdress && touched.steetAdress
                      ? "text-input error"
                      : "text-input"
                  }
                />
                <ErrorMessage
                  name="steetAdress"
                  component="div"
                  className="input-feedback"
                />
              </div>
              <div className="field-wrapper">
                <p>City *</p>
                <Field
                  id="City"
                  name="City"
                  placeholder="Enter your City"
                  type="text"
                  className={
                    errors.City && touched.City
                      ? "text-input error"
                      : "text-input"
                  }
                />
                <ErrorMessage
                  name="City"
                  component="div"
                  className="input-feedback"
                />
              </div>
            </div>
            <div className="inside-wrapper-button">
              <div className="inside-wrapper">
                <div className="field-wrapper">
                  <p>Phone *</p>
                  <Field name="phone">
                    {({ field }) => (
                      <PhoneInput
                        id="phone"
                        {...field}
                        defaultCountry="GE"
                        placeholder="Enter phone number"
                        onChange={(value) => setFieldValue(field.name, value)}
                        onBlur={handleBlur}
                        className={
                          errors.phone && touched.phone
                            ? "text-input error"
                            : "text-input"
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="input-feedback"
                  />
                </div>
                <div className="field-wrapper">
                  <p>Suite </p>
                  <Field
                    id="Suite"
                    name="Suite"
                    placeholder="Street Address Continued"
                    type="text"
                    className={
                      errors.Suite && touched.Suite
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  <ErrorMessage
                    name="Suite"
                    component="div"
                    className="input-feedback"
                  />
                </div>
                <div className="field-wrapper">
                  <p>Country *</p>
                  <Field
                    id="Country"
                    name="Country"
                    placeholder="Enter Country"
                    type="text"
                    className={
                      errors.Country && touched.Country
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  <ErrorMessage
                    name="Country"
                    component="div"
                    className="input-feedback"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default YourInformation;
