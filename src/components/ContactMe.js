import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

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
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      {children}
    </motion.div>
  );
};

const ContactMe = () => {
  return (
    <TiltCard>
      <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
        <div className="contact-me-container">
          Contact Me
          <form
            id="form"
            className="text-center"
            style={{ width: "100%", maxWidth: "300px" }}
          >
            <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />
            <MDBInput
              type="email"
              label="Email address"
              v-model="email"
              wrapperClass="mb-4"
            />
            <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" />
            <MDBTextArea wrapperClass="mb-4" label="Message" />
            <MDBCheckbox
              wrapperClass="d-flex justify-content-center"
              label="Send me copy"
            />
            <MDBBtn color="primary" block className="my-4">
              Send
            </MDBBtn>
          </form>
        </div>
      </div>
    </TiltCard>
  );
};

export default ContactMe;
