import { Button, Card, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { userlogin } from "../../api";
import { admintoken, ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from "../../helper/notificationhelper";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoginSuccess } from "../../redux/Slice/authslice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const result = await userlogin(values);
      console.log(result, "adfmadlkm");
      if (_.isEmpty(_.get(result, "data.data", []))) {
        return ERROR_NOTIFICATION("Invalid credentials");
      }
      dispatch(isLoginSuccess(_.get(result, "data.data", {})));
      localStorage.setItem(admintoken, _.get(result, "data.data.token", ""));
      SUCCESS_NOTIFICATION(result);
      navigate("/");
      form.resetFields();
    } catch (err) {
      console.log(err);
      ERROR_NOTIFICATION(err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem(admintoken)) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-[500px]">
        <h1 className="text-secondary text-3xl font-bold text-center pb-6 font-mono">Welcome Back!</h1>
        <p className="text-gray-600 text-center pb-4">Sign in to your account</p>

        <Form layout="vertical" className="w-full" onFinish={onFinish}>
          <Form.Item name="email" label={<span className="font-medium text-gray-700">Email</span>}>
            <Input placeholder="Enter Your Email" className="h-[50px] rounded-lg border-gray-300 focus:ring focus:ring-primary" />
          </Form.Item>

          <Form.Item name="password" label={<span className="font-medium text-gray-700">Password</span>}>
            <Input type="password" placeholder="Enter Your Password" className="h-[50px] rounded-lg border-gray-300 focus:ring focus:ring-primary" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-primary text-white font-bold w-full h-[50px] rounded-lg hover:bg-primary-dark transition duration-300">
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-primary font-bold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
