const OtherContactInfo = ({ setFormData, formData }) => {
  return (
    <div className="pt-20">
      <p className="text-4xl font-semibold">
        Any other contact Info - Optional
      </p>
      <input
        className="contacFormInput !mt-12 !mb-6"
        type="url"
        name="link"
        placeholder="Social Media links"
        value={formData.socialLink}
        onChange={(e) =>
          setFormData({ ...formData, socialLink: e.target.value })
        }
      />
      <input
        className="contacFormInput !mt-0"
        type="number"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
    </div>
  );
};

export default OtherContactInfo;
