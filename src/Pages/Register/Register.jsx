import { Button, Form, Input } from "antd";
import { EmailValidation, formValidation, PasswordValidation } from "../../helper/formvalidationhelper";
import { addregister } from "../../api";
import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from "../../helper/notificationhelper";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleClick = async (values) => {
    try {
      const result = await addregister(values);
      console.log(result);

      SUCCESS_NOTIFICATION(result);
      form.resetFields();
      navigate("/login");
    } catch (err) {
      console.log(err);
      ERROR_NOTIFICATION(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-[90%] max-w-[350px]">
        <h1 className="text-secondary text-xl font-bold text-center mb-4 font-mono">Sign Up</h1>

        <Form onFinish={handleClick} layout="vertical" className="space-y-3" form={form}>
          <Form.Item name="name" label={<span className="text-sm text-gray-700">Full Name</span>} rules={[formValidation("Enter Your Full Name")]}>
            <Input placeholder="Name" className="h-[40px] rounded-md border-gray-300" />
          </Form.Item>

          <Form.Item name="phone_no" label={<span className="text-sm text-gray-700">Phone</span>} rules={[formValidation("Enter Your Phone No")]}>
            <Input placeholder="Phone" className="h-[40px] rounded-md border-gray-300" />
          </Form.Item>

          <Form.Item name="email" label={<span className="text-sm text-gray-700">Email</span>} rules={[EmailValidation("Enter Email")]}>
            <Input placeholder="Email" className="h-[40px] rounded-md border-gray-300" />
          </Form.Item>

          <Form.Item name="password" label={<span className="text-sm text-gray-700">Password</span>} rules={[PasswordValidation("Enter Password")]}>
            <Input.Password placeholder="Password" className="h-[40px] rounded-md border-gray-300" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-primary text-white font-bold w-full h-[40px] rounded-md">
              Register
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-2">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-bold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
