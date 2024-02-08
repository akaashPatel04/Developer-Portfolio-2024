import React from "react";

const FormEmail = ({ formData, setFormData }) => {
  return (
    <div className="pt-24">
      <p className="text-4xl font-semibold">Your email to connect with you.</p>
      <input
        className="contacFormInput"
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
  );
};

export default FormEmail;
