import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col w-[280px]">
      <label className="text-white text-xl">{label}</label>
      <input class="p-3 my-2 rounded-lg border border-gray-300"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span  className="text-xl p-3 text-red hidden">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
