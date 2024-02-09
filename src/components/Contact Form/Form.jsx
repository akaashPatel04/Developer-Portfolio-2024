import React, { useState } from "react";
import FormName from "./FormName";
import FormProjectType from "./FormProjectType";
import emailjs from "@emailjs/browser";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FormBugdetRange from "./FormBudgetRange";
import FormEmail from "./FormEmail";
import OtherContactInfo from "./OtherContactInfo";
import FormDataMessage from "./FormDataMessage";
import FormSuccess from "./FormSuccess";

const Form = ({ contactFormToggler }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
    socialLink: "",
    phone: "",
  });

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Akash",
          from_email: formData.email,
          to_email: "akaashpatel04@gmailcom",
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          socialLink: formData.socialLink,
          phone: formData.phone,
        },
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          alert("Message sent succesfully");
          setStep(6);
          setLoading(false);
        },
        (error) => {
          alert("Something went wrong!", error.text);
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="px-[8vw] py-10">
      <div className="h-3 absolute top-0 left-0 w-[100%]">
        <div
          className={`bg-primary h-full ${
            step === 0
              ? "w-[14%]"
              : step === 1
              ? "w-[28%]"
              : step === 2
              ? "w-[50%]"
              : step === 3
              ? "w-[70%]"
              : step === 4
              ? "w-[85%]"
              : "w-[100%]"
          }`}
        ></div>
      </div>
      {step === 0 ? (
        <FormName formData={formData} setFormData={setFormData} />
      ) : step === 1 ? (
        <FormProjectType formData={formData} setFormData={setFormData} />
      ) : step === 2 ? (
        <FormBugdetRange formData={formData} setFormData={setFormData} />
      ) : step === 3 ? (
        <FormEmail formData={formData} setFormData={setFormData} />
      ) : step === 4 ? (
        <OtherContactInfo formData={formData} setFormData={setFormData} />
      ) : step === 5 ? (
        <FormDataMessage formData={formData} setFormData={setFormData} />
      ) : (
        <FormSuccess />
      )}
      <div className="flex items-center pr-[4vw] md:w-[65%] gap-6 justify-end">
        {step !== 0 && step !== 6 && (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center justify-center cursor-pointer bg-[#6e64f7] h-10 w-10 rounded-full text-white text-xl font-bold"
          >
            <FaArrowLeft />
          </button>
        )}
        {step !== 5 && step !== 6 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center justify-center cursor-pointer bg-[#6e64f7] h-10 w-10 rounded-full text-white text-xl font-bold"
          >
            <FaArrowRight />
          </button>
        ) : step === 5 ? (
          <button
            onClick={sendEmail}
            disabled={loading}
            className={`cursor-pointer bg-[#6e64f7] py-2 px-8 rounded-full text-white text-lg font-semibold ${
              loading && "opacity-75"
            }`}
          >
            Send
          </button>
        ) : (
          <button
            onClick={contactFormToggler}
            className="cursor-pointer bg-[#6e64f7] py-2 px-8 rounded-full text-white text-lg font-semibold"
          >
            Okay
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
