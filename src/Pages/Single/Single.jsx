import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";

const Single = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    dob: "",
    mail: "",
    phone: "",
    idNumber: "",
    image: "",
    address: "",
  });

  const templates = [
    {
      id: "Template 1",
      image: "https://img.freepik.com/premium-vector/professional-modern-office-id-card-design-template_642592-1935.jpg?w=740",
    },
    {
      id: "Template 2",
      image: "https://marketplace.canva.com/EAFVLsq7vjY/1/0/1600w/canva-purple-and-yellow-modern-high-school-id-card-9nD2EygWLxU.jpg",
    },
    {
      id: "Template 3",
      image: "https://marketplace.canva.com/EAFanujoFkY/2/0/1600w/canva-blue-modern-highschool-id-card-vjI1KIbwj8o.jpg",
    },
    {
      id: "Template 4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_dGKJ_NQAg9BTmMxBibSjdXTlYZsWAtWHg&s",
    },
    {
      id: "Template 5",
      image: "https://img.freepik.com/premium-vector/modern-id-card-template-design_372999-141.jpg",
    },
  ];

  const openModal = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const openImageModal = (template) => {
    setSelectedTemplate(template);
    setIsImageModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerate = () => {
    console.log("Generated ID Card:", formData, "Template:", selectedTemplate);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ID Card Generator</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {templates.map((template) => (
          <div key={template.id} className="relative p-2 bg-white border shadow-lg rounded-lg cursor-pointer hover:opacity-50 " onClick={() => openImageModal(template)}>
            <img src={template.image} alt={template.id} className="w-full h-32 object-cover rounded-md" />
            <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">{template.id}</div>
            <Button
              type="primary"
              className="absolute bottom-2 right-2 text-xs bg-secondary hover:bg-primary"
              onClick={(e) => {
                e.stopPropagation();
                openModal(template);
              }}
            >
              Generate
            </Button>
          </div>
        ))}
      </div>

      <Modal title="Enter Details" open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <Form form={form} layout="vertical" onValuesChange={handleInputChange} onFinish={handleGenerate} initialValues={formData}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item label="Position" name="position" rules={[{ required: true, message: "Please enter your position!" }]}>
            <Input placeholder="Position" />
          </Form.Item>

          <Form.Item label="Date of Birth (MM/DD/YYYY)" name="dob" rules={[{ required: true, message: "Please enter your date of birth!" }]}>
            <Input placeholder="MM/DD/YYYY" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="mail"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: "Please enter your phone number!" }]}>
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item label="ID Number" name="idNumber" rules={[{ required: true, message: "Please enter your ID number!" }]}>
            <Input placeholder="ID Number" />
          </Form.Item>

          <Form.Item label="Image URL" name="image" rules={[{ required: true, message: "Please enter an image URL!" }]}>
            <Input placeholder="Image URL" />
          </Form.Item>

          <Form.Item label="Address" name="address" rules={[{ required: true, message: "Please enter your address!" }]}>
            <Input placeholder="Address" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="w-full bg-blue-500 hover:bg-blue-600" htmlType="submit">
              Generate ID Card
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal title={selectedTemplate?.id || "Template Image"} open={isImageModalOpen} onCancel={() => setIsImageModalOpen(false)} footer={null}>
        {selectedTemplate && <img src={selectedTemplate.image} alt="Template" className="w-full rounded-md" />}
      </Modal>

      {formData.name && selectedTemplate && (
        <div className="mt-6 p-4 border rounded-lg shadow-lg bg-gray-100 max-w-md mx-auto">
          <div className="p-4 rounded-b-lg  flex flex-col items-center">
            <div className="w-20 h-20 mx-auto bg-white rounded-full overflow-hidden border-2 border-gray-300">
              <img src={formData.image || "https://via.placeholder.com/80"} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">{formData.name}</h2>
              <p className="text-sm">{formData.position}</p>
              <div className="mt-4 text-left">
                <p>
                  <strong className="text-sm">DOB:</strong> {formData.dob}
                </p>
                <p>
                  <strong>Email:</strong> {formData.mail}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong>ID No:</strong> {formData.idNumber}
                </p>
                <p>
                  <strong>Address:</strong> {formData.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Single;
