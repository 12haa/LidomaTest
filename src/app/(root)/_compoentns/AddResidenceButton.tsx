"use client";
import React, { useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import plus from "../../../../public/icons/Plus.svg";
import ModalForm from "@/app/(root)/_compoentns/ModalForm";
import { usePathname } from "next/navigation";

const AddResidenceButton = ({
  initialValues = {},
  isEdit = false,
}: {
  initialValues?: any;
  isEdit?: boolean;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [finalValues, setFinalValues] = useState({
    basicInfo: initialValues,
    media: {
      newlyUploadedFiles: [],
      images: initialValues.images || [],
    },
  });

  const [tempFiles, setTempFiles] = useState<any[]>([]);
  return (
    <>
      <div className="flex mt-2 items-center justify-center mb-14">
        <Button
          className="font-medium sm:text-sm text-blue-1 flex gap-2 border-none"
          type="default"
          onClick={() => setModalOpen((prevState) => !prevState)}
        >
          <p className="text-[12px] font-semibold md:text-[14px]">
            {isEdit ? "ویرایش اقامتگاه" : "افزودن اقامتگاه"}
          </p>
          <Image
            src={plus}
            alt="home Icon"
            width={16}
            height={18}
            className="mt-1"
          />
        </Button>
      </div>
      <ModalForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        finalValues={finalValues}
        setFinalValues={setFinalValues}
        tempFiles={tempFiles}
        setTempFiles={setTempFiles}
        initialValues={initialValues}
        isEdit={isEdit}
      />
    </>
  );
};

export default AddResidenceButton;
