import React, { useState } from "react";
import "../Home/Home.scss";
import SignupForm from "../Signupform";
import Yourinformation from "../Yourinformation";
import Paymant from "../Payment";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  const handleNext = () => {
    // Perform validation logic for the current page
    // If validation is successful, navigate to the next page
    if (currentPage === 1) {
      // Validation for Yourinformation component
      // If validation is successful, move to the next page
      const isValid = true; // Replace with your validation logic
      if (isValid) {
        setCurrentPage(2);
      }
    } else if (currentPage === 2) {
      // Validation for SignupForm component
      // If validation is successful, move to the next page
      const isValid = true; // Replace with your validation logic
      if (isValid) {
        setCurrentPage(3);
      }
    } else if (currentPage === 3) {
      // Validation for Paymant component
      // If validation is successful, move to the next page
      const isValid = true; // Replace with your validation logic
      if (isValid) {
        // Perform the necessary action when reaching the last page (e.g., submit the form)
      }
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <section className="home-section">
        <div className="line-wrapper">
          <div className="line">
            <div className={`faCircle ${currentPage === 1 ? "active" : ""}`}>
              1
            </div>
            <div className={`faCircle ${currentPage === 2 ? "active" : ""}`}>
              2
            </div>
            <div className={`faCircle ${currentPage === 3 ? "active" : ""}`}>
              3
            </div>
          </div>
        </div>
        <div className="forms-wrapper">
          <div className="form-wrapepr">
            <div className="form">
              {currentPage === 1 && <SignupForm />}
              {currentPage === 2 && <Yourinformation />}
              {currentPage === 3 && <Paymant />}
              <div className="button-wrapper">
                {currentPage > 1 && (
                  <button type="button" onClick={handleBack}>
                    Back
                  </button>
                )}
                <button type="button" onClick={handleNext}>
                  Next
                </button>
                {currentPage > 2 && <button type="button">
                  Finish
                </button>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
