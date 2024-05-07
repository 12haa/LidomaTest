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
        okText="Hi"
        width={800}
        footer={null}
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

            <SwitchComponent
              title="آیا مالک اقامتگاه شخص دیگری است ؟"
              subTitle="اگر مالک اقامتگاه نیستید لطفا این گزینه را انتخاب کنید"
            />

            <h1 className="pb-4 text-xl py-8"> نرخ گذاری و قیمت</h1>

            <Form.Item name="area">
              <div className="flex relative items-center justify-between">
                <InputNumber
                  placeholder="قیمت روزهای عادی"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-8 text-gray-500">تومان</p>
              </div>
            </Form.Item>
            <Form.Item name="area">
              <div className="flex relative items-center justify-between">
                <InputNumber
                  placeholder="قیمت آخر هفته"
                  className="w-full"
                  size="large"
                />
                <p className="absolute left-8 text-gray-500">تومان</p>
              </div>
            </Form.Item>
            <Form.Item name="area">
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
            <Form.Item name="area">
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
            <h1 className="pb-4 text-xl py-8"> قوانین و مقررات</h1>
            <SwitchComponent title="استعمال دخانیات مجاز می باشد" />
            <SwitchComponent title="ورود حیوان خانگی مجاز می باشد" />
            <SwitchComponent title="برگزاری مراسم مجاز می باشد" />
            <SwitchComponent title="همراه داشتن مدارک محرمیت الزامیست" />
          </div>
          <div className="mt-20 border-4 p-2 flex gap-5 justify-center w-full">
            <Button
              type="primary"
              htmlType="submit"
              className="px-60 rounded-xl py-4 w-full h-full"
            >
              <p className="w-full text-lg">ثبت اقامتگاه</p>
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
