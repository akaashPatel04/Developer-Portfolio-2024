const FormProjectType = ({ formData, setFormData }) => {
  return (
    <div>
      <p className="text-4xl font-semibold md:w-[70%] mb-10">
        What kind of project would you like me to build for you?
      </p>
      <button
        className={`customButtonForForm ${
          formData.projectType === "Frontend" && "bg-primary text-white"
        }`}
        onClick={() => setFormData({ ...formData, projectType: "Frontend" })}
      >
        Frontend Only
        <div className="customButtonForFormInnerDiv"></div>
      </button>
      <button
        className={`customButtonForForm ${
          formData.projectType === "Fullstack" && "bg-primary text-white"
        }`}
        onClick={() => setFormData({ ...formData, projectType: "Fullstack" })}
      >
        Fullstack
        <div className="customButtonForFormInnerDiv"></div>
      </button>
      <button
        className={`customButtonForForm ${
          formData.projectType === "Backend" && "bg-primary text-white"
        }`}
        onClick={() => setFormData({ ...formData, projectType: "Backend" })}
      >
        Backend
        <div className="customButtonForFormInnerDiv"></div>
      </button>
    </div>
  );
};

export default FormProjectType;
