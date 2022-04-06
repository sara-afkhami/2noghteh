import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import Buttons from "./Buttons";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, prevStep, handleFormData, value }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(value.message)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card className="send-massage-body" style={{margin: "auto"}}>
        <Card.Body className="send-massage-form">
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label className="send-massage-label">What's Your Message?</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="message"
                defaultValue={value.message}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("message")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Buttons prevStep={prevStep}/>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;