import { toast } from "react-toastify";

export const showToast = ({
  title,
  type,
  autoClose,
  id = "toast",
}: {
  title: string;
  type: "info" | "success" | "warning" | "error" | "default";
  autoClose?: number;
  id?: any;
}) =>
  toast(title, {
    type: type,
    position: "top-right",
    autoClose: autoClose ?? 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    className: "text-sm",
    toastId: id,
  });

export const dismissToast = () => toast.dismiss();
export const dismissToastById = (id: any) => {
  if (toast) {
    toast.dismiss(id);
  } else {
    console.error("Toast library is not initialized");
  }
};
