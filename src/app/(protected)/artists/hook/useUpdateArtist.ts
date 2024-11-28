import { ApiConstants } from "@/app/utils/api.constants";
import { showToast } from "@/app/utils/toast";
import { IUser } from "@/core/interface/login-response.interface";
import { getCookie } from "cookies-next";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next-nprogress-bar";
import * as Yup from "yup";

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
  role: Yup.string().required("Role is required"),
  password: Yup.string()
    .min(
      6,
      "Password must contain 6 or more characters with at least one of each: uppercase, lowercase, number, and special"
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
      message: "Please create a stronger password",
    })
    .optional(),
});

export interface UseEditArtist {
  formik: any;
  onEditUser: (values: IUser) => Promise<void>;
  isLoading: boolean;
}

export default function useEditArtist(
  initialValues: IUser,
  closeModal: () => void
): UseEditArtist {
  const route = useRouter();
  const token = getCookie("token");

  // Edit user function
  const onEditUser = async (values: IUser) => {
    if (values.password == "") {
      delete values.password;
    }
    const response = await fetch(ApiConstants.users.update(values.id ?? ""), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    const jsonData = await response.json();

    if (jsonData.statusCode >= 400) {
      throw jsonData;
    }

    showToast({ title: "Artist updated successfully", type: "success" });
    route.push("/artists?page=1");
  };

  const formik = useFormik<IUser>({
    initialValues,
    validationSchema,
    validateOnMount: false,
    onSubmit: async (
      values: IUser,
      { setSubmitting }: FormikHelpers<IUser>
    ) => {

      console.log("updated values ",values);
      return onEditUser(values)
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
          closeModal();
        });
    },
  });

  return {
    formik,
    onEditUser,
    isLoading: formik.isSubmitting,
  };
}
