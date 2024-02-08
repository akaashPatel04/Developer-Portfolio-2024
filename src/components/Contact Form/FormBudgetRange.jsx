const FormBugdetRange = ({ formData, setFormData }) => {
  return (
    <div>
      <p className="text-4xl font-semibold md:w-[70%] mb-10">
        Budget in your mind?
      </p>
      <button
        className={`customButtonForForm ${
          formData.budget === "Below $100" && "bg-primary text-white"
        }`}
        onClick={() => setFormData({ ...formData, budget: "Below $100" })}
      >
        Below $100
        <div className="customButtonForFormInnerDiv"></div>
      </button>
      <button
        className={`customButtonForForm ${
          formData.budget === "$100 - $500" && "bg-primary text-white"
        }`}
        onClick={() => setFormData({ ...formData, budget: "$100 - $500" })}
      >
        $100 - $500
        <div className="customButtonForFormInnerDiv"></div>
      </button>
      <button
        className={`customButtonForForm ${
          formData.budget === "$500 - $2000" && "bg-primary text-white"
        }`}
        onClick={() => setFormData({ ...formData, budget: "$500 - $2000" })}
      >
        $500 - $2000
        <div className="customButtonForFormInnerDiv"></div>
      </button>
      <button
        className={`customButtonForForm ${
          formData.budget === "Above $2000" && "bg-primary text-white"
        }`}
        onClick={() => setFormData({ ...formData, budget: "Above $2000" })}
      >
        Above $2000
        <div className="customButtonForFormInnerDiv"></div>
      </button>
    </div>
  );
};

export default FormBugdetRange;
