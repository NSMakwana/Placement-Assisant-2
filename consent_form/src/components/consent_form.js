import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './consent_form.css';
import consentImage from "./images/consent.jpeg";



function ConsentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    semester: "",
    confirmOption: "", // To store the selection for the radio button below the image
    file: null,
  });

  const [fileError, setFileError] = useState("");

  const courses = ["MCA", "M.Sc(AI&ML)", "M.Sc(DS)", "M.Tech(NT)", "M.Tech(WT)"];
  const semesters = ["3rd"];
  const confirm = ["Yes", "No"];
  const agree = ["I agree to all the terms and conditions mentioned"];
  
  // Example image path
  //const imageSrc = "C:/Users/maitr/consent_form/consent.jpeg"; 

  <img src={consentImage} alt="Descriptive Text" />

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setFileError("File size must not exceed 10MB.");
      setFormData({ ...formData, file: null });
    } else {
      setFileError("");
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Consent form submitted successfully!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Consent Form</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Course Dropdown */}
          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Course
            </label>
            <select
              className="form-select"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Semester Field */}
          <div className="mb-3">
            <label className="form-label">Semester</label>
            <div>
              {semesters.map((semester, index) => (
                <div className="form-check form-check-inline" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="semester"
                    id={`semester-${index}`}
                    value={semester}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor={`semester-${index}`}>
                    {semester}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* confirm Field */}
   <div className="mb-3">
            <label className="form-label">Would you like to sit for the placement process?
            </label>
            <div>
              {confirm.map((confirm, index) => (
                <div className="form-check form-check-inline" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="confirm"
                    id={`confirm-${index}`}
                    value={confirm}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor={`confirm-${index}`}>
                    {confirm}
                  </label>
                </div>
              ))}
            </div>Read the following document carefully, print it
            sign it then Scan the signed copy and upload in the next section provided
          </div>


          {/* Single Image with Radio Button */}
          <div className="image-section mt-3">
  <label className="form-label"></label>
     <label className="form-check-label" htmlFor="imageOption">
      <img
        src={consentImage} 
        alt="Consent Option"
        className="img-thumbnail"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
    </label>

    <div>
              {agree.map((agree, index) => (
                <div className="form-check form-check-inline" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="agree"
                    id={`agree-${index}`}
                    value={agree}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor={`agree-${index}`}>
                    {agree}
                  </label>
                </div>
              ))}
            </div>

  </div>
  <div></div>
  
   
          {/* File Upload Field */}
          <div className="mb-3">Upload the Agreement file with the file name as  Rollno_Name_Course_Sem_Year

            <label htmlFor="file" className="form-label">
              Upload File (Max: 10MB)
            </label>
            <input
              type="file"
              className="form-control"
              id="file"
              name="file"
              onChange={handleFileChange}
              required
            />
            {fileError && <small className="text-danger">{fileError}</small>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsentForm;
