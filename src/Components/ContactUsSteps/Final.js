import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const Final = ({ values, prevStep, nextStep }) => {
  //destructuring the object from values
  const { message, email, name } = values;
  const onSubmit = () => {
    const object = { message, email, name };
    console.log(JSON.stringify(object));
    axios
      .post(
        "https://sheet.best/api/sheets/600eb564-0138-41e5-9961-d5878ce03114",
        object
      )
      .then((response) => {
        console.log("--->>> " + response);
      });

    nextStep();
  };

  return (
    <>
      <Card
        className="send-massage-body"
        style={{ textAlign: "center", margin: "auto" }}
      >
        <Card.Body className="send-massage-form" style={{ color: "white" }}>
          <h2>if this data is correct, press next step</h2>
          <p>
            <strong>Message: </strong> {message}{" "}
          </p>
          <p>
            <strong>Email: </strong> {email}{" "}
          </p>
          <p>
            <strong>Name: </strong> {name}{" "}
          </p>
          <div className="btns">
            <Button onClick={prevStep}>
              <span>&#10229;</span>
            </Button>

            <Button className="btn1" type="submit" onClick={onSubmit}>
              <span>&#10230;</span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
