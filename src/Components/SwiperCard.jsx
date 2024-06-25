import { useState } from "react";
import "./SwiperCard.css";
import FormInput from "../Components/Form";

const   SwiperCard = () => {
  const [values, setValues] = useState({
    username: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Let us know you..! 😄",
      label: "Who are you..?",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Let's Goooo!!</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SwiperCard;