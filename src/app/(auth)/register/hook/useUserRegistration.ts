import { ApiConstants } from "@/app/utils/api.constants";
import { showToast } from "@/app/utils/toast";
import { IUser } from "@/core/interface/login-response.interface";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next-nprogress-bar";
import * as Yup from "yup";


const initialValues: IUser = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  dob: "",
  gender: "male",
  address: "",
  password: "",
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  dob: Yup.string().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string().required("Address is required"),
  password: Yup.string()
    .min(
      6,
      "password must contain 6 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
      message: "Please create a stronger password",
    })
    .required("Required"),
});
interface UseUserRegistration {
  formik: any;
  onRegister: (values: IUser) => Promise<void>;
  isLoading: boolean;
}

export default function useUserRegistration(): UseUserRegistration {
  const route = useRouter();
  const onRegister = async (values: IUser) => {
    const response = await fetch(ApiConstants.auth.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const jsonData = await response.json();

    if (jsonData.statusCode >= 400) {
      throw jsonData;
    }

    showToast({ title: "User registered successfully", type: "success" });
    route.push("/login");
  };

  const formik = useFormik<IUser>({
    initialValues,
    validationSchema,
    validateOnMount: false,
    onSubmit: async (
      values: IUser,
      { setSubmitting }: FormikHelpers<IUser>
    ) => {
      return onRegister(values)
        .catch((err: any) => {
          if (err?.error) {
            showToast({
              title: err?.error?.message || err.message,
              type: "error",
            });
          } else {
            showToast({ title: "Error occurred", type: "error" });
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return {
    formik,
    onRegister,
    isLoading: false,
  };
}

