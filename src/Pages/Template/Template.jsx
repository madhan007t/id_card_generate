// import React, { useState } from "react";
// import { templates } from "../../helper/datahelper";
// import { Modal } from "antd";

// const Template = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isImageModalOpen, setIsImageModalOpen] = useState(false);
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   const openModal = (template) => {
//     setSelectedTemplate(template);
//     setIsModalOpen(true);
//   };

//   const openImageModal = (template) => {
//     setSelectedTemplate(template);
//     setIsImageModalOpen(true);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//         {templates.map((template) => (
//           <div key={template.id} className="relative p-2 bg-white h-[350px] border shadow-lg rounded-lg cursor-pointer    " onClick={() => openImageModal(template)}>
//             <img src={template.image} alt={template.id} className="w-full h-[300px]   rounded-md" />
//             <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">{template.id}</div>
//             <button
//               type="primary"
//               className="absolute bottom-2 right-2 p-1 rounded-sm px-4 font-bold text-white  text-xs bg-secondary hover:bg-primary"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 openModal(template);
//               }}
//             >
//               Generate
//             </button>
//           </div>
//         ))}
//       </div>
//       <Modal title={selectedTemplate?.id || "Template Image"} open={isImageModalOpen} onCancel={() => setIsImageModalOpen(false)} footer={null}>
//         {selectedTemplate && <img src={selectedTemplate.image} alt="Template" className="w-full rounded-md" />}
//       </Modal>
//     </div>
//   );
// };

// export default Template;

import Single from "../Single/Single";

const Template = () => {
  return (
    <div>
      <Single />
    </div>
  );
};

export default Template;
