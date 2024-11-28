"use client";

import { Button } from "@/app/components/button";
import FormInput from "@/app/components/form/input";
import PasswordInput from "@/app/components/form/input/password.input";
import SelectField from "@/app/components/form/select";
import { Dropdown } from "@/core/interface/dropdown.base";
import Link from "next/link";
import useUserRegistration from "./hook/useUserRegistration";

const RegisterForm = () => {
  const { formik, isLoading } = useUserRegistration();
  const genderOptions: Dropdown<string>[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 text-center">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="mb-4">
            <FormInput
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
              name="first_name"
              placeHolder="Enter your First Name"
              type="text"
              required
              label="First Name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.first_name}
            />
          </div>
          <div className="mb-4">
            <FormInput
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
              name="last_name"
              placeHolder="Enter your Last Name"
              type="text"
              required
              label="Last Name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.last_name}
            />
          </div>
          <div className="mb-4">
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
          </div>
          <PasswordInput
            style={{ background: "rgba(255, 255, 255, 0.70)" }}
            label="Password"
            name="password"
            placeHolder="Enter your password"
            errors={formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div className="mb-4">
            <FormInput
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
              name="phone"
              placeHolder="Enter your Phone Number"
              type="number"
              required
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.phone}
            />
          </div>
          <div className="mb-4">
            <FormInput
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
              name="dob"
              placeHolder="Enter your Date of Birth"
              type="date"
              required
              label="DOB"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.dob}
            />
          </div>
          <div className="mb-4">
            <FormInput
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
              name="address"
              placeHolder="Enter your address"
              type="text"
              required
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.address}
            />
          </div>

          <div className="mb-4">
            <SelectField
              label="Gender"
              value={formik.values.gender}
              placeholder="Select Gender"
              options={genderOptions}
              disabled={false}
              onChange={(e: string) => {
                formik.setFieldValue("gender", e);
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[16px] mt-5">
          <Button
            color=""
            className={`w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300`}
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
            title={formik.isSubmitting ? "Registering..." : "Register"}
            type="submit"
          />
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-800">
            Don't have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
