import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import validator from "validator";
import Buttons from "./Buttons";

// creating functional component ans getting props from app.js and destucturing them
const Steps = ({ nextStep, prevStep, handleFormData, value, title }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    console.log("value " + value.message);
    if (validator.isEmpty(value.message)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <Card className="send-massage-body">
      <Card.Body className="send-massage-form">
        <Form onSubmit={submitFormData}>
          <Form.Group className="mb-3">
            <Form.Label>What's Your {title}?</Form.Label>
            <Form.Control
              style={{
                border: error ? "2px solid red" : "none",
                backgroundColor: "transparent",
              }}
              name=""
              
              type="text"
              onChange={handleFormData({title})}
            />
            {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </Form.Group>
          <Buttons prevStep={prevStep} />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Steps;
