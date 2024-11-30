import { ApiConstants } from "@/app/utils/api.constants";
import { MusicGenreEnum } from "@/app/utils/roles.constants";
import { showToast } from "@/app/utils/toast";
import { IMusic } from "@/core/interface/music.interface";
import { getCookie } from "cookies-next";
import { FormikHelpers, useFormik } from "formik";
// import { useRouter } from "next/navigation";
import { useRouter } from "next-nprogress-bar";
import * as Yup from "yup";

const initialValues: IMusic = {
  title: "",
  album_name: "",
  genre: MusicGenreEnum.CLASSIC,
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  album_name: Yup.string().required("Album Name is required"),
  genre: Yup.string().required("Genre is required"),
});

export interface UseAddMusic {
  formik: any;
  onAddMusic: (values: IMusic) => Promise<void>;
  isLoading: boolean;
}

export default function useAddMusic(closeModal: () => void): UseAddMusic {
  const route = useRouter();
  const token = getCookie("token");
  const onAddMusic = async (values: IMusic) => {
    const response = await fetch(ApiConstants.musics.add, {
      method: "POST",
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

    showToast({ title: "Music added successfully", type: "success" });
    route.refresh();
  };

  const formik = useFormik<IMusic>({
    initialValues,
    validationSchema,
    validateOnMount: false,
    onSubmit: async (
      values: IMusic,
      { setSubmitting }: FormikHelpers<IMusic>
    ) => {
      return onAddMusic(values)
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
    onAddMusic,
    isLoading: false,
  };
}
