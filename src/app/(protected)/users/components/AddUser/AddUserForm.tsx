"use client";
import FormInput from "@/app/components/form/input";
import SelectField from "@/app/components/form/select";
import { Dropdown } from "@/core/interface/dropdown.base";
import useAddUser from "../../hook/useAddUser";
import PasswordInput from "@/app/components/form/input/password.input";

interface AddUserModalProps {
  closeModal: () => void;
}

export default function AddUserForm({ closeModal }: AddUserModalProps) {
  const { formik, isLoading } = useAddUser(closeModal);
  const roleOptions: Dropdown<string>[] = [
    { value: "artist", label: "Artist" },
    { value: "artist_manager", label: "Artist Manager" },
    { value: "super_admin", label: "Super Admin" },
  ];
  const genderOptions: Dropdown<string>[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Add New User
        </h2>
        <form onSubmit={formik.handleSubmit}>
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
              label="Role"
              value={formik.values.role}
              placeholder="Select Role"
              options={roleOptions}
              disabled={false}
              onChange={(e: string) => {
                formik.setFieldValue("role", e);
              }}
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
          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
