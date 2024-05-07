import React from "react";
import { Button, Form, Input, InputNumber, Modal, Select, Switch } from "antd";
import {
  maxResidenceCapacity,
  propertyArea,
  propertyStatus,
  propertyType,
  ResidenceBedLinenCount,
  ResidenceBedroomCount,
  residenceCapacity,
} from "@/app/constants";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";

interface ModalFormProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalForm = ({ modalOpen, setModalOpen }: ModalFormProps) => {
  return (
    <>
      <Modal
        title={
          <h1 className=" text-center text-primary text-xl font-semibold uppercase">
            Apply filters
          </h1>
        }
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        centered
        width={1000}
        footer={null}
        keyboard={true}
      >
        <Form layout="vertical" size="large">
          {/* Form Items */}
          <div
            className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1"
            dir="rtl"
          >
            <Form.Item name="info">
              <h1 className="pb-4 text-xl"> اطلاعات اقامتگاه</h1>
              <Input
                placeholder="اطلاعات اقامتگاه"
                className="p-3 rounded-xl"
              />
            </Form.Item>

            <Form.Item name="type">
              <Select
                options={propertyStatus}
                className=" rounded-xl "
                size="large"
                placeholder="نوع اقامتگاه"
              />
            </Form.Item>
            <Form.Item name="city ">
              <Select
                options={propertyArea}
                className="rounded-xl"
                size="large"
                placeholder="منطقه اقامتگاه"
              />
            </Form.Item>

            <Form.Item name="area">
              <div className="flex relative items-center justify-between">
                <InputNumber
                  placeholder="مساحت کل زمین"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-6 text-gray-500">متر مربع</p>
              </div>
            </Form.Item>

            <Form.Item name="capacity">
              <h1 className="pb-4 text-xl"> ظرفیت اقامتگاه</h1>
              <Select
                options={residenceCapacity}
                placeholder="ظرفیت استاندارد"
              />
            </Form.Item>
            <Form.Item name="parking">
              <Select
                options={maxResidenceCapacity}
                placeholder=" حداکثر ظرفیت "
              />
            </Form.Item>
            <Form.Item name="parking">
              <Select
                options={ResidenceBedroomCount}
                placeholder=" تعداد تخت خواب "
              />
            </Form.Item>
            <Form.Item name="parking">
              <Select
                options={ResidenceBedLinenCount}
                placeholder=" تعداد رخت خواب "
              />
            </Form.Item>
            <Form.Item name="info">
              <h1 className="pb-4 text-xl"> آدرس اقامتگاه</h1>
              <Input placeholder="استان" className="p-3 rounded-xl" />
            </Form.Item>
            <Form.Item name="info">
              <Input placeholder="شهر" className="p-3 rounded-xl" />
            </Form.Item>
            <Form.Item name="info">
              <TextArea placeholder="آدرس دقیق" className="p-3 rounded-xl" />
            </Form.Item>
            <div className="border-2 bg-gray-2 p-10 rounded-2xl flex flex-col gap-8 items-center justify-center">
              <Image
                src="/icons/UploadImage.svg"
                width={56}
                height={56}
                alt="Icon"
              />
              <p className="text-lg font-semibold">
                لطفاً تصاویر اقامتگاه خود را بارگذاری کنید
              </p>
              <Button
                type="primary"
                size="large"
                className="mt-2  rounded-xl   "
              >
                بارگذاری تصویر
              </Button>
            </div>
            <div>{/* TODO : THIS IS WHERE UPLOADED IMAGES SHOULD GO*/}</div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex flex-col gap-4" dir="rtl">
                <h1 className="text-lg font-semibold">
                  آیا مالک اقامتگاه شخص دیگری است ؟
                </h1>
                <p className="text-gray-400">
                  اگر مالک اقامتگاه نیستید لطفا این گزینه را انتخاب کنید
                </p>
              </div>
              <div dir="ltr">
                <Switch defaultChecked className="size-fit" />
              </div>
            </div>
          </div>
          <div className="mt-7 flex gap-5 justify-end">
            <Button type="default">Cancel</Button>

            <Button type="primary" htmlType="submit">
              Apply
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
