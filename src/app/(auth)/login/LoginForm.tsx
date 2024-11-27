"use client";

import { Button } from "@/app/components/button";
import FormInput from "@/app/components/form/input";
import PasswordInput from "@/app/components/form/input/password.input";
import useUserLogin from "./hook/useUserLogin";

const LoginForm = () => {
  const { formik, isLoggingIn } = useUserLogin();

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 text-center">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full space-y-[16px]">
          <FormInput
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
            name="email"
            placeHolder="Enter your email address"
            type="text"
            required
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.email}
          />
          <PasswordInput
            style={{ background: "rgba(255, 255, 255, 0.70)" }}
            label="Password"
            name="password"
            placeHolder="Enter your password"
            errors={formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-[16px] mt-5">
          <Button
            color=""
            className={`w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300`}
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
            title={isLoggingIn ? "Loggingin..." : "Login"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
