import React from "react";

function CustomInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}) {
  return (
    <div className="w-full mt-3">
      <label id={name} className="font-medium mt-5">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        className="w-full h-10 rounded-md border mt-1.5 px-2"
      />
    </div>
  );
}

export default CustomInput;
