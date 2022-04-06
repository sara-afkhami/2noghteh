import React from "react";
import { Card, Button } from "react-bootstrap";
import Buttons from "./Buttons";

const Final = ({ values, prevStep, nextStep }) => {
    //destructuring the object from values
  const { message, email, name } = values;
  

  return (
    <>

      <Card className="send-massage-body" style={{ textAlign: "center" , margin: "auto"}}>
        <Card.Body className="send-massage-form" style={{ "color": "white" }}>
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

      <Button className="btn1" type="submit" onClick={nextStep} >
        <span>&#10230;</span>
      </Button>
    </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
