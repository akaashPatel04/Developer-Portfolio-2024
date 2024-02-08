const FormName = ({ formData, setFormData }) => {
  return (
    <div className="pt-24">
      <p className="text-4xl font-semibold">
        May I please have <br /> your name?
      </p>
      <input
        className="contacFormInput"
        type="text"
        name="name"
        placeholder="Type your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </div>
  );
};

export default FormName;
