import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import "antd/dist/reset.css";
import "tailwindcss/tailwind.css";

type FloatingLabelSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
  }[];
};
const FloatingLabelSelect = ({
  label,
  name,
  options,
}: FloatingLabelSelectProps) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(" ");

  const handleFocus = () => setFocus(true);
  const handleBlur = () => {
    if (!value) setFocus(false);
  };

  // const handleChange = (e: any) => setValue(e.target.value);

  return (
    <Form.Item name={name} className="relative w-full mb-6">
      <label
        htmlFor={name}
        className={`absolute right-2 px-2 py-1 transition-all duration-200 ease-in-out bg-white z-50  ${
          value && focus
            ? "top-[-10px] text-xs text-blue-500"
            : `   top-2 text-gray-500 text-sm `
        }`}
      >
        {label}
      </label>

      <Select
        id={name}
        placeholder={!focus && label}
        options={options}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // onChange={handleChange}
        size="large"
        className="w-full rounded-xl   border  focus:outline-none focus:border-blue-500"
      />
    </Form.Item>
  );
};
export default FloatingLabelSelect;
