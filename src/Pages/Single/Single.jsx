import React, { useState } from "react";
import { Modal, Button, Input, Form, Drawer } from "antd";
import { addSingle } from "../../api";
import { SUCCESS_NOTIFICATION } from "../../helper/notificationhelper";
import Showimages from "../../helper/Showimage";
import Uploadhelper from "../../helper/Uploadhelper";
import TextArea from "antd/es/input/TextArea";
import { templates } from "../../helper/datahelper";
import _ from "lodash";
import { Template1, Template2 } from "../../Components/Id_Templates/id_templates";

const Single = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [image_path, setImagePath] = useState(null);
  // const [generatedData, setGeneratedData] = useState(null);

  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    try {
      values.image = image_path;
      values.template = selectedTemplate.id;
      // setGeneratedData(values);
      const result = await addSingle(values);
      SUCCESS_NOTIFICATION(result);
      form.resetFields();
      setImagePath("");
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const openModal = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ID Card Generator</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {templates.map((template) => (
          <div key={template.id} className="relative p-2 bg-white h-[350px] border shadow-lg rounded-lg cursor-pointer " onClick={() => openModal(template)}>
            <img src={template.image} alt={template.id} className="w-full h-[300px] rounded-md object-contain" />
            <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">{template.id}</div>
            <button
              className="absolute bottom-2 right-2 p-1 rounded-sm px-4 font-bold text-white text-xs bg-secondary hover:bg-primary"
              onClick={(e) => {
                e.stopPropagation();
                openModal(template);
              }}
            >
              Generate
            </button>
          </div>
        ))}
      </div>

      <Drawer title="Enter Details" open={isModalOpen} onClose={() => setIsModalOpen(false)} footer={null} width="100vw">
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="title" name="title" rules={[{ required: true, message: "Please enter your title!" }]}>
              <Input placeholder="title" className="h-[50px] w-full" />
            </Form.Item>

            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input placeholder="Name" className="h-[50px] w-full" />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email!" }]}>
              <Input placeholder="Email" className="h-[50px] w-full" />
            </Form.Item>

            <Form.Item label="Position" name="position" rules={[{ required: true, message: "Please enter your position!" }]}>
              <Input placeholder="Enter Position" className="h-[50px] w-full" />
            </Form.Item>

            <Form.Item label="ID Number" name="id_number" rules={[{ required: true, message: "Please enter your ID number!" }]}>
              <Input placeholder="ID Number" className="h-[50px] w-full" />
            </Form.Item>

            <Form.Item label="Phone Number" name="phone_no" rules={[{ required: true, message: "Please enter your phone number!" }]}>
              <Input placeholder="Phone Number" className="h-[50px] w-full" />
            </Form.Item>

            <Form.Item label="Address" name="address" rules={[{ required: true, message: "Please enter your address!" }]}>
              <TextArea rows={2} placeholder="Address" className="w-full" />
            </Form.Item>

            <div className="col-span-2">
              <Form.Item label="Image URL" name="image">
                {image_path ? <Showimages path={image_path} setImage={setImagePath} /> : <Uploadhelper setImagePath={setImagePath} />}
              </Form.Item>
            </div>

            <div className="col-span-2">
              <Form.Item>
                <Button type="primary" className="w-full bg-primary rounded-none h-[50px]" htmlType="submit">
                  Generate ID Card
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Drawer>

      {/* {generatedData && (
        <div className="mt-6 flex justify-center">
          <Template1 {...generatedData} />
        </div>
      )} */}
    </div>
  );
};

export default Single;
