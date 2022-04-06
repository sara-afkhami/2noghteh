import Final from "./ContactUsSteps/Final";
import Steps from "./ContactUsSteps/Steps";
import StepOne from "./ContactUsSteps/StepOne";
import StepTwo from "./ContactUsSteps/StepTwo";
import StepThree from "./ContactUsSteps/StepThree";
import Loader from "./Loader";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SocialMedia = () => {
  return (
    <div align="center" class="socialbtns">
      <ul>
        <li>
          <a href="#" class="fa fa-lg fa-facebook"></a>
        </li>
        <li>
          <a href="#" class="fa fa-lg fa-twitter"></a>
        </li>
        <li>
          <a href="#" class="fa fa-lg fa-linkedin"></a>
        </li>
        <li>
          <a href="#" class="fa fa-lg fa-instagram"></a>
        </li>
        <li>
          <a href="#" class="fa fa-lg fa-pinterest"></a>
        </li>
        <li>
          <a href="#" class="fa fa-lg fa-skype"></a>
        </li>
        <li>
          <a href="#" class="fa fa-lg fa-telegram"></a>
        </li>
        <li>
          <a href="#" class="fa fa-lg fa-whatsapp"></a>
        </li>
      </ul>
    </div>
    // <div className="space social-media" style={{"justify-content": "space-between"}}>
    //   <a href="#" class="fa fa-facebook"></a>
    //   <a href="#" class="fa fa-twitter"></a>
    //   <a href="#" class="fa fa-linkedin"></a>
    //   <a href="#" class="fa fa-instagram"></a>
    //   <a href="#" class="fa fa-pinterest"></a>
    //   <a href="#" class="fa fa-skype"></a>
    //   <a href="#" class="fa fa-telegram"></a>
    //   <a href="#" class="fa fa-whatsapp"></a>
    // </div>
  );
};

const ContactUs = (props) => {
  const [step, setstep] = useState(0);
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);

  //state for form data
  const [formData, setFormData] = useState({
    message: "",
    email: "",
    name: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const ContactUsInfo = () => {
    return (
      <div className="intro contact-us">
        <div className="col-md-5 intro-text">
          <h1>{props.data ? props.data.title : "Loading"}</h1>
          <div className="space c">
            <p className="space">
              <a href="#">{props.data ? props.data.email : "Loading"}</a>
            </p>
          </div>
          <div className="space c">
            <p className="space">
              <a href="#">{props.data ? props.data.phoneNumber : "Loading"}</a>
            </p>
          </div>
          <div className="space c">
            <p className="space">
              <a href="#">{props.data ? props.data.address : "Loading"}</a>
            </p>
          </div>
          <div className="space c">
            <p className="space">
              <a href="#">{props.data ? props.data.postalCode : "Loading"}</a>
            </p>
          </div>

          <button
            className="space send-massage-button"
            type="button"
            onClick={() => nextStep()}
          >
            <span>Send Your Massage</span>
          </button>
          <SocialMedia />
        </div>
      </div>
    );
  };
  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 0: {
      return <>{!done ? <Loader /> : <ContactUsInfo />}</>;
    }

    case 1:
      return (
        <div className="">
          <StepOne
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            value={formData}
            // title={props.data.stepOneTitle}
          />
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="">
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
            // title={props.data.stepTwoTitle}
          />
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="">
          <StepThree
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            value={formData}
            // title={props.data.stepThreeTitle}
          />
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Final nextStep={nextStep} prevStep={prevStep} values={formData} />
        </div>
      );
    case 5:
      console.log(JSON.stringify(formData));
      let message = formData.message;
      let email = formData.email;
      let name = formData.name;

      const object = { message, email, name };
      axios
        .post(
          "https://sheet.best/api/sheets/600eb564-0138-41e5-9961-d5878ce03114",
          object
        )
        .then((response) => {
          console.log("--->>> " + response);
        });
      setTimeout(() => {
        window.location.reload();
      }, 200);
      return;
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
};
export default ContactUs;

// import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
// import StepOne from "./ContactUsSteps/StepOne";
// import StepTwo from "./ContactUsSteps/StepTwo";
// import Final from "./ContactUsSteps/Final";

// const ContactUs = ()=> {
//   //state for steps
//   const [step, setstep] = useState(1);

//   //state for form data
//   const [formData, setFormData] = useState({
//     message: "",
//     email: "",
//     name: ""

//   })

//   // function for going to next step by increasing step state by 1
//   const nextStep = () => {
//     setstep(step + 1);
//   };

//   // function for going to previous step by decreasing step state by 1
//   const prevStep = () => {
//     setstep(step - 1);
//   };

//   // handling form input data by taking onchange value and updating our previous form data state
//   const handleInputData = input => e => {
//     // input value from the form
//     const {value } = e.target;

//     //updating for data state taking previous state and then adding new value to create new object
//     setFormData(prevState => ({
//       ...prevState,
//       [input]: value
//   }));
//   }

// // javascript switch case to show different form in each step
//   switch (step) {
//     // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
//     case 1:
//       return (

//                 <StepOne nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

//       );
//     // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
//     case 2:
//       return (

//                 <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

//       );
//       // Only formData is passed as prop to show the final value at form submit
//     case 3:
//       return (
//         <div className="App">
//           <Container>
//             <Row>
//               <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
//                 <Final nextStep={nextStep} prevStep={prevStep} values={formData}  />
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       );
//     // default case to show nothing
//     default:
//       return (
//         <div className="App">
//         </div>
//       );
//   }
// }

// export default ContactUs;