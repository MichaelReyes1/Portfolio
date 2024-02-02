import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: "yes",
    gender: "male",
    workExperience: "one-year",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    console.log("Form submitted:", formData);
  };

  return (
    <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
      <div className="contact-me-container">
        Contact Me
        <form
          action="https://getform.io/f/d9e94126-8ba5-4f43-8b00-8d18270510e8"
          method="POST"
          className="text-center"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="input"
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {/* Add hidden Honeypot input to prevent spams */}
          <input
            type="hidden"
            name="_gotcha"
            style={{ display: "none !important" }}
          />
          {/* Select field handle */}
          <button className="input button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
