import React, { useState, useEffect } from "react";
import { Card, Skeleton } from "antd";

const Template = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  const templates = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      bloodGroup: "B+",
      phone: "+123456789",
      company: "Tech Corp",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager",
      bloodGroup: "O+",
      phone: "+987654321",
      company: "Tech Solutions",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Alan Brown",
      position: "UI/UX Designer",
      bloodGroup: "A-",
      phone: "+456123789",
      company: "Creative Studio",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Emily Clark",
      position: "Marketing Lead",
      bloodGroup: "AB+",
      phone: "+789123456",
      company: "Market Innovators",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Michael Lee",
      position: "Data Scientist",
      bloodGroup: "B-",
      phone: "+321456987",
      company: "Data Insights",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Sophia Green",
      position: "HR Manager",
      bloodGroup: "O-",
      phone: "+654987123",
      company: "People First",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {templates.map((template, index) => (
        <Card key={template.id} className="w-80 shadow-lg" hoverable cover={loading ? <Skeleton.Image active /> : <img alt="employee" src={template.image} className="w-full h-40 object-cover" />}>
          {loading ? (
            <Skeleton loading={loading} active paragraph={{ rows: 3 }} />
          ) : (
            <div>
              <h2 className={`text-lg font-bold ${index % 2 === 0 ? "text-blue-600" : "text-green-600"}`}>{template.company}</h2>
              <p className="text-md font-semibold text-gray-700">{template.name}</p>
              <p className="text-sm text-gray-600">{template.position}</p>
              <div className="mt-3">
                <p className="text-sm text-gray-600">
                  <strong>Blood Group:</strong> {template.bloodGroup}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> {template.phone}
                </p>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Template;
