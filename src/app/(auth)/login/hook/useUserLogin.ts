import { BASE_URL } from "@/app/utils/api.constants";
import { showToast } from "@/app/utils/toast";
import { ILoginUser } from "@/core/interface/login-user.interface";
import { setCookie } from "cookies-next";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next-nprogress-bar";
import * as Yup from "yup";

const initialValues: ILoginUser = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface UseUserLogin {
  formik: any;
  onLogin: (values: ILoginUser) => Promise<void>;
  isLoggingIn: boolean;
}

export default function useUserLogin(): UseUserLogin {
  const route = useRouter();
  async function onLogin(values: ILoginUser) {
    const response = await fetch(BASE_URL + "/auth/login", {
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

    showToast({ title: "Login successful", type: "success" });
    console.log(jsonData);
    setCookie("token", jsonData.data?.token);
    setCookie("user", jsonData.data?.user);
    route.push("/dashboard");
  }

  const formik = useFormik<ILoginUser>({
    initialValues,
    validationSchema,
    validateOnMount: false,
    onSubmit: async (
      values: ILoginUser,
      { setSubmitting }: FormikHelpers<ILoginUser>
    ) => {
      return onLogin(values)
        .catch((err: any) => {
          if (err?.error?.email) {
            showToast({ title: err?.error?.email, type: "error" });
          } else {
            showToast({ title: err?.message, type: "error" });
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return {
    formik: formik,
    onLogin,
    isLoggingIn: false,
  };
}
