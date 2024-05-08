import React, { useState } from "react";
import { Form, Input } from "antd";
import "antd/dist/reset.css";
import "tailwindcss/tailwind.css";

type FloatingLabelInputProps = {
  label: string;
  name: string;
};
const FloatingLabelInput = ({ label, name }: FloatingLabelInputProps) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setFocus(true);
  const handleBlur = () => {
    if (!value) setFocus(false);
  };

  const handleChange = (e: any) => setValue(e.target.value);

  return (
    <Form.Item name={name} className="relative w-full mb-6">
      <label
        htmlFor={name}
        className={`absolute right-2 px-5 py-1 transition-all bg-transparent duration-200 ease-in-out bg-white z-50  ${
          focus || value
            ? "top-[-10px] text-xs text-blue-500"
            : "top-2 text-gray-500 text-sm"
        }`}
      >
        {label}
      </label>

      <Input
        id={name}
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </Form.Item>
  );
};
export default FloatingLabelInput;
