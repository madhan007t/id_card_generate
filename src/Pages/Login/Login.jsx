import { Button, Card, Form, Input } from "antd";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-[500px]">
        <h1 className="text-secondary text-3xl font-bold text-center pb-6 font-mono">Welcome Back!</h1>
        <p className="text-gray-600 text-center pb-4">Sign in to your account</p>

        <Form layout="vertical" className="w-full">
          <Form.Item label={<span className="font-medium text-gray-700">Email</span>}>
            <Input placeholder="Enter Your Email" className="h-[50px] rounded-lg border-gray-300 focus:ring focus:ring-primary" />
          </Form.Item>

          <Form.Item label={<span className="font-medium text-gray-700">Password</span>}>
            <Input type="password" placeholder="Enter Your Password" className="h-[50px] rounded-lg border-gray-300 focus:ring focus:ring-primary" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="bg-primary text-white font-bold w-full h-[50px] rounded-lg hover:bg-primary-dark transition duration-300">
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
