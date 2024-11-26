"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationPage = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    role: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phone: Yup.string().required("Phone number is required"),
    dob: Yup.date().required("Date of birth is required"),
    role: Yup.string().optional(),
  });

  const handleSubmit = (values: any) => {
    console.log("Registration Data:", values);
    // Add registration logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Register
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* First Name Field */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Last Name Field */}
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Date of Birth Field */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <Field
                  type="date"
                  name="dob"
                  id="dob"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Role Field */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role (Optional)
                </label>
                <Field
                  as="select"
                  name="role"
                  id="role"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationPage;
