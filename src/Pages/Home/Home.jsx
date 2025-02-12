import React, { useState } from "react";
import { Modal } from "antd";
import { templates } from "../../helper/datahelper";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const openModal = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const openImageModal = (template) => {
    setSelectedTemplate(template);
    setIsImageModalOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Recent Templates Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-700">Recent Templates</h1>
      </div>

      {/* Your Order Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-700">Your Order</h1>
      </div>

      {/* Templates Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-700 pb-3">Templates</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="relative p-2 bg-white h-[350px] border shadow-lg rounded-lg cursor-pointer hover:opacity-50  " onClick={() => openImageModal(template)}>
              <img src={template.image} alt={template.id} className="w-full h-[300px]   rounded-md" />
              <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">{template.id}</div>
              <button
                type="primary"
                className="absolute bottom-2 right-2 p-1 rounded-sm px-4 font-bold text-white  text-xs bg-secondary hover:bg-primary"
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
        <Modal title={selectedTemplate?.id || "Template Image"} open={isImageModalOpen} onCancel={() => setIsImageModalOpen(false)} footer={null}>
          {selectedTemplate && <img src={selectedTemplate.image} alt="Template" className="w-full rounded-md" />}
        </Modal>
      </div>
    </div>
  );
};

export default Home;
