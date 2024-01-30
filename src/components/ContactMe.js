

// import React, { useState } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";


// const TiltCard = ({ children }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const rotateX = useTransform(
//     mouseYSpring,
//     [-0.5, 0.5],
//     ["17.5deg", "-17.5deg"]
//   );
//   const rotateY = useTransform(
//     mouseXSpring,
//     [-0.5, 0.5],
//     ["-17.5deg", "17.5deg"]
//   );

//   const handleMouseMove = (e) => {
//     const rect = e.target.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateY,
//         rotateX,
//         transformStyle: "preserve-3d",
//         position: "relative",
//         zIndex: 1,
//       }}
//       className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ContactMe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };


//   return (
//     <TiltCard>
//       <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
//         <div className="contact-me-container">
//           Contact Me
//           <form
//             id="form"
//             className="text-center"
//             style={{ width: "100%", maxWidth: "300px" }}
//             onSubmit={handleSubmit}
//           >
//             <MDBInput
//               className="input"
//               placeholder="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <MDBInput
//               className="input"
//               type="email"
//               placeholder="Email address"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <MDBInput
//               className="input"
//               placeholder="Subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//             />
//             <MDBTextArea
//               className="input"
//               placeholder="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//             <MDBBtn type="submit" className="input button">
//               Send
//             </MDBBtn>
//           </form>
//         </div>
//       </div>
//     </TiltCard>
//   );
// };

// export default ContactMe;

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        position: "relative",
        zIndex: 1,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      {children}
    </motion.div>
  );
};

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
    <TiltCard>
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
            <button className="input button">
              Send
            </button>
          </form>
        </div>
      </div>
    </TiltCard>
  );
};

export default ContactMe;