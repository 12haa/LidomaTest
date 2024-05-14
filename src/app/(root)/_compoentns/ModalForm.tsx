import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Switch,
  Upload,
} from "antd";
import {
  isResidenceActive,
  propertyArea,
  ResidenceBedLinenCount,
  ResidenceBedroomCount,
  residenceCapacity,
} from "@/app/constants";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { AddResidence } from "@/actions/residence";
import { revalidatePath } from "next/cache";
import { UploadFilesAdnReturnUrls } from "@/helpers/upload-media";

// import {AddResidence} from "@/app/actions/residence";

interface ModalFormProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  finalValues: any;
  setFinalValues: (finalValues: any) => void;
  tempFiles: any;
  setTempFiles: (tempFiles: any) => void;
}

const ModalForm = ({
  modalOpen,
  setModalOpen,
  finalValues,
  setFinalValues,
  tempFiles,
  setTempFiles,
}: ModalFormProps) => {
  const onFinish = async (values: any) => {
    try {
      setFinalValues({
        ...finalValues,
        basicInfo: values,
        media: { newlyUploadedFiles: tempFiles },
      });

      const tempFinalValues = { ...finalValues, basicInfo: values };

      const tempMedia = tempFinalValues.media;

      tempMedia.images = await UploadFilesAdnReturnUrls(
        tempMedia.newlyUploadedFiles,
      );

      tempFinalValues.media = tempMedia;

      const valuesToAddDb = {
        ...tempFinalValues.basicInfo,
        images: tempFinalValues.media?.images,
      };
      console.log(valuesToAddDb, "valuesToAddDb ");
      const imageUrls = valuesToAddDb.images;
      console.log(imageUrls, "image Urls");

      const response = await AddResidence(valuesToAddDb, imageUrls[0]);
      console.log(response.data, " im Response");
      if (response.error) console.log(response.error, "im response.error");
      message.success("Residence added successfully.");
    } catch (err: any) {
      return {
        error: err.message,
      };
    }
  };

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
        <Form onFinish={onFinish}>
          {/* Form Items */}
          <div
            className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1"
            dir="rtl"
          >
            <div className="flex flex-col">
              <h1 className="pb-4 text-xl"> اطلاعات اقامتگاه</h1>
              <Form.Item name="residenceName" className="relative w-full ">
                <Input
                  placeholder="نام اقامتگاه"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </Form.Item>
            </div>
            <Form.Item name="residenceType" className="relative w-full ">
              <Select options={propertyArea} placeholder="نوع اقامتگاه" />
            </Form.Item>

            <Form.Item name="residenceArea" className="relative w-full ">
              <Select options={propertyArea} placeholder="منطقه اقامتگاه" />
            </Form.Item>
            <Form.Item name="isResidenceActive" className="relative w-full ">
              <Select
                options={isResidenceActive}
                placeholder="دردسترس بودن اقامتگاه"
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
                <p className="absolute left-7 justify-center items-center text-gray-500">
                  متر مربع
                </p>
              </div>
            </Form.Item>

            <h1 className="pb-4 text-xl">ظرفیت اقامتگاه</h1>

            <Form.Item
              name="residenceNormalCapacity"
              className="relative w-full "
            >
              <Select
                options={residenceCapacity}
                placeholder="ظرفیت استاندارد"
              />
            </Form.Item>
            <Form.Item name="residenceMaxCapacity" className="relative w-full ">
              <Select options={residenceCapacity} placeholder="حداکثر ظرفیت " />
            </Form.Item>
            <Form.Item name="residenceBedCount">
              <Select
                options={ResidenceBedroomCount}
                placeholder=" تعداد تخت خواب "
              />
            </Form.Item>
            <Form.Item
              name="residenceBedLinenCount"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <Select
                options={ResidenceBedLinenCount}
                placeholder=" تعداد رخت خواب "
              />
            </Form.Item>
            <span className="   h-0.5 my-4  border-t-2"></span>
            <h1 className="pb-4 text-xl"> آدرس اقامتگاه</h1>
            <Form.Item name="residenceProvince">
              <Input placeholder="استان" />
            </Form.Item>
            <Form.Item name="residenceCity">
              <Input placeholder="شهر" />
            </Form.Item>

            <Form.Item name="residenceExactAddress">
              <Input placeholder="آدرس دقیق" />
            </Form.Item>
            <span className="   h-0.5 mb-10 mt-4  border-t-2"></span>
            <div className="  w-full  bg-gray-2 p-20  rounded-2xl mx-auto flex flex-col gap-8 items-center justify-center">
              <Upload
                listType="picture-card"
                multiple
                beforeUpload={(file: any) => {
                  setTempFiles((prev) => [...prev, file]);
                  return false;
                }}
              >
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
                </div>
                <Button
                  type="primary"
                  size="large"
                  className="mt-2  rounded-xl    "
                >
                  بارگذاری تصویر
                </Button>
              </Upload>
            </div>
            {/*{[1, 2, 3].map((item, i) => (*/}
            {/*  <div*/}
            {/*    key={i}*/}
            {/*    className="flex w-[100%]  mx-auto  flex-col items-center justify-between  gap-2 mt-12 overflow-hidden rounded-2xl relative "*/}
            {/*  >*/}
            {/*    <div className="absolute  py-4 items-center justify-between px-2 w-full  flex  gap-4">*/}
            {/*      <div className="flex gap-2 items-center justify-center ">*/}
            {/*        <div className="rounded-full px-5 py-2.5 bg-white text-lg font-semibold">*/}
            {/*          {i + 1}*/}
            {/*        </div>*/}
            {/*        {i === 0 ? (*/}
            {/*          <p className="bg-white rounded-2xl p-2.5  px-3.5 text-center font-semibold">*/}
            {/*            تصویر اصلی*/}
            {/*          </p>*/}
            {/*        ) : null}*/}
            {/*      </div>*/}

            {/*      <div className="rounded-full px-4 py-3.5  bg-red-1">*/}
            {/*        <Image*/}
            {/*          src="/icons/TrashIcon.svg"*/}
            {/*          width={24}*/}
            {/*          height={24}*/}
            {/*          alt="trashIcon"*/}
            {/*        />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <Image*/}
            {/*      className="w-full reounded-2xl"*/}
            {/*      width={400}*/}
            {/*      height={400}*/}
            {/*      src="/images/House1.jpg"*/}
            {/*      objectFit="cover"*/}
            {/*      alt="House Images"*/}
            {/*    />*/}
            {/*    <div className=" absolute flex left-1 rounded-full px-4 py-3.5 bg-white text-lg font-semibold bottom-2">*/}
            {/*      <Image*/}
            {/*        src="/icons/Navigation.svg"*/}
            {/*        alt=""*/}
            {/*        height={24}*/}
            {/*        width={24}*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*))}*/}
            <span className="   h-0.5 mt-10  border-t-2"></span>
            <Form.Item name="ownerShip">
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
            </Form.Item>
            <span className="   h-0.5 mt-10  border-t-2"></span>
            <h1 className="pb-4 text-xl py-8"> نرخ گذاری و قیمت</h1>

            <Form.Item
              name="dailyBassesPrice"
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
              name="weeklyBasesPrice"
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
              name="peakBasesPrice"
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
              name="pricePerExtraPerson"
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
            <Form.Item name="isSmokingAllowed">
              <div className="flex items-center justify-between mt-10">
                <div className="flex flex-col gap-4" dir="rtl">
                  <h1 className="text-lg font-semibold">
                    استعمال دخانیات مجاز می باشد
                  </h1>
                </div>
                <div dir="ltr">
                  <Switch defaultChecked className="size-fit" />
                </div>
              </div>
            </Form.Item>
            <Form.Item name="isPetsAllowed" valuePropName="checked">
              <div className="flex items-center justify-between mt-10">
                <div className="flex flex-col gap-4" dir="rtl">
                  <h1 className="text-lg font-semibold">
                    ورود حیوان خانگی مجاز می باشد{" "}
                  </h1>
                </div>
                <div dir="ltr">
                  <Switch defaultChecked className="size-fit" />
                </div>
              </div>
            </Form.Item>
            <Form.Item name="partyAllowence">
              <div className="flex items-center justify-between mt-10">
                <div className="flex flex-col gap-4" dir="rtl">
                  <h1 className="text-lg font-semibold">
                    برگزاری مراسم مجاز می باشد
                  </h1>
                </div>
                <div dir="ltr">
                  <Switch defaultChecked className="size-fit" />
                </div>
              </div>
            </Form.Item>
            <Form.Item name="paperIsWorkRequired" valuePropName="checked">
              <div className="flex items-center justify-between mt-10">
                <div className="flex flex-col gap-4" dir="rtl">
                  <h1 className="text-lg font-semibold">
                    همراه داشتن مدارک محرمیت الزامیست
                  </h1>
                </div>
                <div dir="ltr">
                  <Switch defaultChecked className="size-fit" />
                </div>
              </div>
            </Form.Item>
          </div>
          <div className="flex flex-col mt-4 gap-6 ">
            <span className="mx-auto w-[98%] h-1.5  mt-4 border-t-2"></span>
            <div className="   flex gap-5 justify-center w-full">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="  rounded-xl py-4 px-80 h-full"
                >
                  <p className="w-full text-lg">ثبت اقامتگاه</p>
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
