import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

const SignupForm = () => {
  const [optionsData, setOptionsData] = useState([]);

  useEffect(() => {
    // Make the API call to retrieve the options data
    fetch("http://localhost:5000/data")  //npx json-server --watch db.json --port 5000
      .then((response) => response.json())
      .then((data) => {
        setOptionsData(data);
      })
      .catch((error) => {
        console.error("Error fetching options data:", error);
      });
  }, []);

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
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name can not be empty"),
        select: Yup.string().required("Please select option"),
        Company: Yup.string().required("Company cannot be empty"),
        timeframe: Yup.string().required("Please select option"),
        zipcode: Yup.string("Invalid Zip")
          .required("Enter Zip code")
          .min(4, "Invalid Zip"),
        lastname: Yup.string().required("Last Name can't' be empty"),
        email: Yup.string()
          .email("Looks like this is not an email")
          .required("Required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            "Password Requred Special character and cemal case"
          )
          .required("Password cannot be empty"),
      })}
    >
      {({ values, touched, errors, handleChange, handleBlur }) => (
        <Form>
          <div className="insides-wrapper">
            <div className="inside-wrapper">
              <div className="field-wrapper">
                <p>Bussines type *</p>
                {optionsData.length > 0 ? (
                  <select
                    id="select"
                    name="select"
                    value={values.select}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.select && touched.select
                        ? "text-input error"
                        : "text-input"
                    }
                  >
                    <option value="">- Select -</option>
                    {optionsData.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading options...</p>
                )}
              </div>
              <ErrorMessage
                name="select"
                component="div"
                className="input-feedback"
              />
              <div className="field-wrapper">
                <p>Company</p>
                <Field
                  id="Company"
                  name="Company"
                  placeholder="Company"
                  type="text"
                  className={
                    errors.Company && touched.Company
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </div>

              <ErrorMessage
                name="Company"
                component="div"
                className="input-feedback"
              />
              <div className="field-wrapper">
                <p>First Name *</p>
                <Field
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="input-feedback"
              />
            </div>
            <div className="inside-wrapper-button">
              <div className="inside-wrapper">
                <div className="field-wrapper">
                  <p>Timeframe *</p>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={values.timeframe}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.timeframe && touched.timeframe
                        ? "text-input error"
                        : "text-input"
                    }
                  >
                    <option value="">- Select -</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <ErrorMessage
                  name="timeframe"
                  component="div"
                  className="input-feedback"
                />
                <div className="field-wrapper">
                  <p>Zipcode *</p>
                  <Field
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    type="number"
                    className={
                      errors.zipcode && touched.zipcode
                        ? "number-input error"
                        : "number-input"
                    }
                  />
                </div>
                <ErrorMessage
                  name="zipcode"
                  component="div"
                  className="input-feedback"
                />
                <div className="field-wrapper">
                  <p>Last Name *</p>
                  <Field
                    id="lastname"
                    name="lastname"
                    placeholder="Enter your Lastname"
                    type="text"
                    className={
                      errors.lastname && touched.lastname
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </div>
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="input-feedback"
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
