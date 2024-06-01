import React from "react";
import Image from "next/image";
import { Button } from "antd";

const CustomImageComponent = ({
  file,
  index,
  onRemove,
}: {
  file: File;
  index: number;
  onRemove: (index: number) => void;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full ">
      <Image
        src={URL.createObjectURL(file)}
        width={300}
        height={300}
        alt={`Uploaded image ${index}`}
        className="rounded-2xl w-full h-full object-cover"
      />
      <div className="absolute top-3 flex items-center justify-between w-full px-4">
        <div className="flex gap-2 items-center justify-evenly">
          <div className="bg-white px-5 py-2 rounded-full items-center justify-center leading-8 font-semibold">
            <p className="font-semibold text-[18px]">{index + 1}</p>
          </div>
          {index === 0 && (
            <div className="bg-white py-2 px-6 rounded-full items-center justify-center leading-8 font-semibold">
              <p>تصویر اصلی</p>
            </div>
          )}
        </div>
        <Button
          className="relative w-14 h-14 bg-red-1 rounded-full items-center justify-center border-none  "
          onClick={() => onRemove(index)}
        >
          <Image
            src="/icons/TrashIcon.svg"
            width={30}
            height={30}
            alt="Icon"
            className="top-3 left-3 absolute"
          />
        </Button>
      </div>
    </div>
  );
};

export default CustomImageComponent;
