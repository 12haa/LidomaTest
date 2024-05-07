import React from "react";
import { Switch } from "antd";

type SwitchComponentProps = {
  title: string;
  subTitle?: string;
};
const SwitchComponent = ({ title, subTitle }: SwitchComponentProps) => {
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex flex-col gap-4" dir="rtl">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-400">{subTitle}</p>
      </div>
      <div dir="ltr">
        <Switch defaultChecked className="size-fit" />
      </div>
    </div>
  );
};

export default SwitchComponent;
