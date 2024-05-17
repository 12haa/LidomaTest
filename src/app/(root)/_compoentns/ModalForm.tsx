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

import Image from "next/image";
import { AddResidence, EditResidence } from "@/actions/residence";
import { revalidatePath } from "next/cache";
import { UploadFilesAdnReturnUrls } from "@/helpers/upload-media";
import { useParams } from "next/navigation";

// import {AddResidence} from "@/app/actions/residence";

interface ModalFormProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  finalValues: any;
  setFinalValues: (finalValues: any) => void;
  tempFiles: any;
  setTempFiles: (tempFiles: any) => void;
  isEdit?: boolean;
  initialValues?: any;
}

const ModalForm = ({
  modalOpen,
  setModalOpen,
  finalValues,
  setFinalValues,
  tempFiles,
  setTempFiles,
  isEdit = false,
  initialValues,
}: ModalFormProps) => {
  const { id }: any = useParams();
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
      const imageUrls = valuesToAddDb.images;
      let response = null;
      if (isEdit) {
        response = await EditResidence(valuesToAddDb, id);
      } else {
        response = await AddResidence(valuesToAddDb, imageUrls[0]);
      }
      if (response.error) console.log(response.error, "im response.error");
      message.success(response.message);
    } catch (err: any) {
      return {
        error: err.message,
      };
    }
  };
  console.log(finalValues, " temp files");

  return (
    <Modal
      title={
        <div className="flex flex-col">
          <h1 className=" mb-6 text-center text-primary text-xl md:text-2xl font-semibold">
            {isEdit ? "ویرایش اقامتگاه" : " افزودن اقامتگاه"}
          </h1>
          <span className="h-0.5 my-4 border-t-2"></span>
        </div>
      }
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      width={800}
      footer={null}
    >
      <Form onFinish={onFinish} initialValues={finalValues.basicInfo}>
        {/* Form Items */}
        <div
          className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1"
          dir="rtl"
        >
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl"> اطلاعات اقامتگاه</h1>
            <Form.Item
              name="residenceName"
              className="relative w-full"
              rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
            >
              <Input
                placeholder="نام اقامتگاه"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </Form.Item>
          </div>
          <Form.Item
            name="residenceType"
            className="relative w-full"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
            <Select options={propertyArea} placeholder="نوع اقامتگاه" />
          </Form.Item>

          <Form.Item
            name="residenceArea"
            className="relative w-full"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
            <Select options={propertyArea} placeholder="منطقه اقامتگاه" />
          </Form.Item>
          <Form.Item
            name="isResidenceActive"
            className="relative w-full"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
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
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
            <Select options={residenceCapacity} placeholder="ظرفیت استاندارد" />
          </Form.Item>
          <Form.Item
            name="residenceMaxCapacity"
            className="relative w-full "
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
            <Select options={residenceCapacity} placeholder="حداکثر ظرفیت " />
          </Form.Item>
          <Form.Item
            name="residenceBedCount"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
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
          <span className="h-0.5 my-4 border-t-2"></span>
          <h1 className="pb-4 text-xl"> آدرس اقامتگاه</h1>
          <Form.Item
            name="residenceProvince"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
            <Input placeholder="استان" />
          </Form.Item>
          <Form.Item
            name="residenceCity"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
            <Input placeholder="شهر" />
          </Form.Item>

          <Form.Item
            name="residenceExactAddress"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
            <Input placeholder="آدرس دقیق" />
          </Form.Item>
          <span className="h-0.5 mb-10 mt-4 border-t-2"></span>
          <div className=" w-full relative bg-gray-200 p-20 rounded-2xl mx-auto flex flex-col gap-8 items-center justify-center">
            <div className="bg-gray-200 p-7 rounded-2xl mx-auto flex flex-col gap-8 items-center justify-center">
              <Image
                src="/icons/UploadImage.svg"
                width={56}
                height={56}
                alt="Icon"
              />
              <p className="text-xl max-md:text-sm mx-auto font-semibold items-center justify-center">
                لطفاً تصاویر اقامتگاه خود را بارگذاری کنید
              </p>
            </div>
            <Upload
              listType="picture-circle"
              multiple
              beforeUpload={(file: any) => {
                setTempFiles((prev: any) => [...prev, file]);
                return false;
              }}
              onRemove={(file: any) => {
                setTempFiles((prev: any) =>
                  prev.filter((item: any) => item !== file),
                );
              }}
            >
              <Button
                type="primary"
                size="large"
                className="mt-2 rounded-xl h-fit"
              >
                بارگذاری تصویر
              </Button>
            </Upload>
          </div>
          <div>
            {tempFiles.map((file: any, index: number) => (
              <img src={file.img} alt="" key={index} />
            ))}
          </div>

          {/*TODO : USER'S UPLOADED IMAGES GO HERE*/}

          <span className="h-0.5 mt-10border-t-2"></span>
          <Form.Item
            name="ownerShip"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
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
              className="flex relative items-center justify-between"
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
              className="flex relative items-center justify-between"
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
          <span className="h-0.5 mt-10 border-t-2"></span>
          <h1 className="pb-4 text-xl py-8"> قوانین و مقررات</h1>
          <Form.Item
            name="isSmokingAllowed"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
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
          <Form.Item
            name="partyAllowence"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
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
          <Form.Item
            name="paperIsWorkRequired"
            valuePropName="checked"
            rules={[{ required: true, message: "نمیتواند خالی باشد" }]}
          >
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
        <div className="flex flex-col mt-4 gap-6">
          <span className="mx-auto w-[98%] h-1.5 mt-4 border-t-2"></span>
          <div className="flex gap-5 justify-center w-full">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-primary rounded-xl py-4 px-80 h-full"
              >
                <p className="w-full text-lg">ثبت اقامتگاه</p>
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalForm;
