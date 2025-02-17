import React, { useState } from "react";
import { templates } from "../../helper/datahelper";
import { Button, Drawer, Form, Input } from "antd";
import Showimages from "../../helper/Showimage";
import Uploadhelper from "../../helper/Uploadhelper";
import TextArea from "antd/es/input/TextArea";
import { SUCCESS_NOTIFICATION } from "../../helper/notificationhelper";
import { PlusOutlined } from "@ant-design/icons";

const Bulk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [forms, setForms] = useState([{ id: 1, image_path: "" }]); // State to store multiple forms

  const openModal = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const addNewForm = () => {
    setForms([...forms, { id: forms.length + 1, image_path: "" }]);
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="relative p-2 bg-white h-[350px] border shadow-lg rounded-lg cursor-pointer" onClick={() => openModal(template)}>
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

        {/* Main Drawer */}
        <Drawer title="Enter Details" open={isModalOpen} onClose={() => setIsModalOpen(false)} footer={null} width="100vw">
          <Form layout="vertical">
            {forms.map((formItem, index) => (
              <div key={formItem.id} className="border-b pb-4 mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <Form.Item label="Title" name={`title_${formItem.id}`} rules={[{ required: true, message: "Please enter your title!" }]}>
                    <Input placeholder="Title" className="h-[50px] w-full" />
                  </Form.Item>

                  <Form.Item label="Name" name={`name_${formItem.id}`} rules={[{ required: true, message: "Please enter your name!" }]}>
                    <Input placeholder="Name" className="h-[50px] w-full" />
                  </Form.Item>

                  <Form.Item label="Email" name={`email_${formItem.id}`} rules={[{ required: true, message: "Please enter your email!" }]}>
                    <Input placeholder="Email" className="h-[50px] w-full" />
                  </Form.Item>

                  <Form.Item label="Position" name={`position_${formItem.id}`} rules={[{ required: true, message: "Please enter your position!" }]}>
                    <Input placeholder="Enter Position" className="h-[50px] w-full" />
                  </Form.Item>

                  <Form.Item label="ID Number" name={`id_number_${formItem.id}`} rules={[{ required: true, message: "Please enter your ID number!" }]}>
                    <Input placeholder="ID Number" className="h-[50px] w-full" />
                  </Form.Item>

                  <Form.Item label="Phone Number" name={`phone_no_${formItem.id}`} rules={[{ required: true, message: "Please enter your phone number!" }]}>
                    <Input placeholder="Phone Number" className="h-[50px] w-full" />
                  </Form.Item>

                  <Form.Item label="Address" name={`address_${formItem.id}`} rules={[{ required: true, message: "Please enter your address!" }]}>
                    <TextArea rows={2} placeholder="Address" className="w-full" />
                  </Form.Item>

                  <div className="col-span-2">
                    <Form.Item label="Image URL" name={`image_${formItem.id}`}>
                      {formItem.image_path ? <Showimages path={formItem.image_path} /> : <Uploadhelper />}
                    </Form.Item>
                  </div>
                </div>
              </div>
            ))}

            {/* Plus Button to Add New Form */}
            <div className="flex justify-center mt-4">
              <Button type="dashed" icon={<PlusOutlined />} className="w-full h-[50px]" onClick={addNewForm}>
                Add Another Form
              </Button>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 mt-4">
              <Form.Item>
                <Button type="primary" className="w-full bg-primary rounded-none h-[50px]" htmlType="submit">
                  Generate ID Card
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Drawer>
      </div>
    </>
  );
};

export default Bulk;
