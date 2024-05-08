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
import SwitchComponent from "@/app/(root)/_compoentns/SwitchComponent";
import * as z from "zod";

interface ModalFormProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalForm = ({ modalOpen, setModalOpen }: ModalFormProps) => {
  return (
    <>
      <Modal
        title={
          <div className="flex flex-col">
            <h1 className=" mb-6 text-center text-primary text-xl md:text-2xl font-semibold ">
              افزودن اقامتگاه
            </h1>
            <span className="   h-0.5 my-4  border-t-2"></span>
          </div>
        }
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={800}
        footer={null}
      >
        <Form layout="vertical" size="large">
          {/* Form Items */}
          <div
            className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1"
            dir="rtl"
          >
            <Form.Item
              name="info"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <h1 className="pb-4 text-xl"> اطلاعات اقامتگاه</h1>
              <Input
                placeholder="اطلاعات اقامتگاه"
                className=" py-4 rounded-xl"
              />
            </Form.Item>

            <Form.Item
              name="type"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <Select
                options={propertyStatus}
                className=" rounded-xl  "
                size="large"
                placeholder="نوع اقامتگاه"
              />
            </Form.Item>
            <Form.Item
              name="city "
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <Select
                options={propertyArea}
                className="rounded-xl"
                size="large"
                placeholder="منطقه اقامتگاه"
              />
            </Form.Item>

            <Form.Item
              name="area"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <div className="flex relative items-center justify-between">
                <InputNumber
                  placeholder="مساحت کل زمین"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-6 text-gray-500">متر مربع</p>
              </div>
            </Form.Item>

            <span className="   h-0.5 my-4  border-t-2"></span>
            <Form.Item
              name="capacity"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <h1 className="pb-4 text-xl"> ظرفیت اقامتگاه</h1>
              <Select
                options={residenceCapacity}
                placeholder="ظرفیت استاندارد"
              />
            </Form.Item>
            <Form.Item
              name="parking"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
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
            <Form.Item
              name="parking"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <Select
                options={ResidenceBedLinenCount}
                placeholder=" تعداد رخت خواب "
              />
            </Form.Item>
            <span className="   h-0.5 my-4  border-t-2"></span>
            <Form.Item
              name="info"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <h1 className="pb-4 text-xl"> آدرس اقامتگاه</h1>
              <Input placeholder="استان" className="p-3 rounded-xl" />
            </Form.Item>
            <Form.Item
              name="info"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <Input placeholder="شهر" className="p-3 rounded-xl" />
            </Form.Item>

            <Form.Item
              name="info"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <TextArea placeholder="آدرس دقیق" className="p-3 rounded-xl" />
            </Form.Item>
            <span className="   h-0.5 mb-10 mt-4  border-t-2"></span>
            <div className="  w-full  bg-gray-2 p-20  rounded-2xl mx-auto flex flex-col gap-8 items-center justify-center">
              <Image
                src="/icons/UploadImage.svg"
                width={56}
                height={56}
                alt="Icon"
              />
              <p className="text-xl max-md:text-sm mx-auto font-semibold  items-center justify-center  ">
                لطفاً تصاویر اقامتگاه خود را بارگذاری کنید
              </p>
              <Button
                type="primary"
                size="large"
                className="mt-2  rounded-xl    "
              >
                بارگذاری تصویر
              </Button>
            </div>
            {[1, 2, 3].map((item, i) => (
              <div
                key={i}
                className="flex w-[100%]  mx-auto  flex-col items-center justify-between  gap-2 mt-12 overflow-hidden rounded-2xl relative "
              >
                <div className="absolute  py-4 items-center justify-between px-2 w-full  flex  gap-4">
                  <div className="flex gap-2 items-center justify-center ">
                    <div className="rounded-full px-5 py-2.5 bg-white text-lg font-semibold">
                      {i + 1}
                    </div>
                    {i === 0 ? (
                      <p className="bg-white rounded-2xl p-2.5  px-3.5 text-center font-semibold">
                        نصویر اصلی
                      </p>
                    ) : null}
                  </div>

                  <div className="rounded-full px-4 py-3.5  bg-red-1">
                    <Image
                      src="/icons/TrashIcon.svg"
                      width={24}
                      height={24}
                      alt="trashIcon"
                    />
                  </div>
                </div>
                <Image
                  className="w-full reounded-2xl"
                  width={400}
                  height={400}
                  src="/images/House1.jpg"
                  objectFit="cover"
                  alt="House Images"
                />
                <div className=" absolute flex left-1 rounded-full px-4 py-3.5 bg-white text-lg font-semibold bottom-2">
                  <Image
                    src="/icons/Navigation.svg"
                    alt=""
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            ))}
            <span className="   h-0.5 mt-10  border-t-2"></span>
            <SwitchComponent
              title="آیا مالک اقامتگاه شخص دیگری است ؟"
              subTitle="اگر مالک اقامتگاه نیستید لطفا این گزینه را انتخاب کنید"
            />
            <span className="   h-0.5 mt-10  border-t-2"></span>
            <h1 className="pb-4 text-xl py-8"> نرخ گذاری و قیمت</h1>

            <Form.Item
              name="area"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <div className="flex relative items-center justify-between">
                <InputNumber
                  placeholder="قیمت روزهای عادی"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-8 text-gray-500">تومان</p>
              </div>
            </Form.Item>
            <Form.Item
              name="area"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <div className="flex relative items-center justify-between">
                <InputNumber
                  placeholder="قیمت آخر هفته"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-8 text-gray-500">تومان</p>
              </div>
            </Form.Item>
            <Form.Item
              name="area"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <div
                className="flex relative items-center justify-between "
                dir="rtl"
              >
                <InputNumber
                  placeholder="قیمت ایام پیک"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-8 text-gray-500">تومان</p>
              </div>
            </Form.Item>
            <Form.Item
              name="area"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <div
                className="flex relative items-center justify-between "
                dir="rtl"
              >
                <InputNumber
                  placeholder="نرخ هر نفر اضافه"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-8 text-gray-500">تومان</p>
              </div>
            </Form.Item>
            <span className="   h-0.5 mt-10  border-t-2"></span>
            <h1 className="pb-4 text-xl py-8"> قوانین و مقررات</h1>
            <SwitchComponent title="استعمال دخانیات مجاز می باشد" />
            <SwitchComponent title="ورود حیوان خانگی مجاز می باشد" />
            <SwitchComponent title="برگزاری مراسم مجاز می باشد" />
            <SwitchComponent title="همراه داشتن مدارک محرمیت الزامیست" />
          </div>
          <div className="flex flex-col mt-4 gap-6 ">
            <span className="mx-auto w-[98%] h-1.5  mt-4 border-t-2"></span>
            <div className="   flex gap-5 justify-center w-full">
              <Button
                type="primary"
                htmlType="submit"
                className=" rounded-xl py-4 w-full h-full"
              >
                <p className="w-full text-lg">ثبت اقامتگاه</p>
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
