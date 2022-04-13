import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { DropzoneDialog } from "material-ui-dropzone";
import useDrivePicker from "react-google-drive-picker";
import Loader from "./Loader";

const Career = (props) => {
  const [openPicker, data, authResponse] = useDrivePicker();
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "901092617546-3rkoqkh4cth5d4frl3e316vvuaaarg0h.apps.googleusercontent.com",
      developerKey: "AIzaSyA5vZTXWamjS4D4U7gzXz8g5fPt52lOh3I",
      viewId: "DOCS",
      //token:"##youraccesstoken##", // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
    });
  };

  useEffect(() => {
    // do anything with the selected/uploaded files
    if (data) {
      data.docs.map((i) => console.log(i));
    }
  }, [data]);

  const UploadButton = () => {
    // const [open, setOpen] = useState(false);

    return (
      <div>
        <button
          className="career-btn upload"
          onClick={() => {
            handleOpenPicker();
          }}
          type="button"
        >
          Upload CV
        </button>

        {/* <DropzoneDialog
          acceptedFiles={["image/*"]}
          cancelButtonText={"cancel"}
          submitButtonText={"submit"}
          maxFileSize={5000000}
          open={open}
          onClose={() => setOpen(false)}
          onSave={(files) => {
            console.log("Files:", files);
            setOpen(false);
            return files;
          }}
          showPreviews={true}
          showFileNamesInPreview={true}
        /> */}
      </div>
    );
  };

  return (
    <>
      {!done ? (
        <Loader />
      ) : (
        <div className="intro">
          <div className="col-md-6 intro-text main">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <Formik
              initialValues={{
                name: "",
                fieldOfExperience: "",
                phoneNumber: "",
                email: "",
                files: "",
              }}
              onSubmit={(values) => {
                // alert(JSON.stringify(values, null, 2));
                const { name, fieldOfExperience, phoneNumber, email } = values;
                
                // let careerName = formData.name;
                // let fieldOfExperience = formData.fieldOfExperience;
                // let phoneNumber = formData.phoneNumber;
                // let careerEmail = formData.email;
                
                const object = { name, fieldOfExperience, phoneNumber, email };
                console.log(object);
                axios
                  .post(
                    "https://sheet.best/api/sheets/7f6fb81d-fa4a-4a36-b958-2601cf98d701",
                    object
                  )
                  .then((response) => {
                    console.log("--->>> " + response.data);
                  })
                  .catch((error) => {console.log("error" + error);});
              }}
            >
              <Form>
                <div className="form-group">
                  <div className="form-item">
                    <label className="form-label-career" htmlFor="name">Name:</label>
                    <Field id="name" name="name" placeholder="" />
                  </div>

                  <div className="form-item">
                    <label className="form-label-career" htmlFor="fieldOfExperience">
                      Field Of Experience:
                    </label>
                    <Field
                      id="fieldOfExperience"
                      name="fieldOfExperience"
                      placeholder=""
                    />
                  </div>

                  <div className="form-item">
                    <label className="form-label-career" htmlFor="phoneNumber">Phone Number:</label>
                    <Field id="phoneNumber" name="phoneNumber" placeholder="" />
                  </div>

                  <div className="form-item">
                    <label className="form-label-career" htmlFor="email">Email:</label>
                    <Field
                      id="email"
                      name="email"
                      placeholder=""
                      type="email"
                    />
                  </div>
                  <div className="career-buttons">
                    <UploadButton />
                    {/* <div className="form-item">
                <label htmlFor="email"></label>
                <Field id="file" name="file" placeholder="" type="file" />
              </div> */}
                    {/* <input id="file" name="file" placeholder="" type="file" class="custom-file-input"/> */}
                    <button className="career-btn submit" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};
export default Career;
