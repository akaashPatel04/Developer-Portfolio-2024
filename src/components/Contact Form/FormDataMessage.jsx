const FormDataMessage = ({ setFormData, formData }) => {
  return (
    <div className="pt-20">
      <p className="text-4xl font-semibold">Lastly any additional message</p>
      <textarea
        className="contacFormInput !mt-12 !mb-2 !h-auto"
        name="Message"
        rows="6"
        placeholder="Other information here..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
    </div>
  );
};

export default FormDataMessage;
