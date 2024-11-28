"use client";

import FormInput from "@/app/components/form/input";
import SelectField from "@/app/components/form/select";
import { MusicGenreEnum } from "@/app/utils/roles.constants";
import { Dropdown } from "@/core/interface/dropdown.base";
import { IMusic } from "@/core/interface/music.interface";
import useEditMusic from "../../hook/useUpdateMusic";

interface EditUserModalProps {
  closeModal: () => void;
  initialValues: IMusic;
}

export default function EditMusicForm({
  closeModal,
  initialValues,
}: EditUserModalProps) {
  const { formik, isLoading } = useEditMusic(
    { ...initialValues },
    closeModal
  );
  const genreOptions: Dropdown<string>[] = [
    { value: MusicGenreEnum.CLASSIC, label:"Classic"},
    { value: MusicGenreEnum.COUNTRY, label:"Country" },
    { value: MusicGenreEnum.JAZZ, label:"Jazz" },
    { value: MusicGenreEnum.RNB, label:"RNB" },
    { value: MusicGenreEnum.ROCK, label:"Rock" },
  ];

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Music</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <FormInput
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
              name="title"
              placeHolder="Enter Title"
              type="text"
              required
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.title}
            />
          </div>
          <div className="mb-4">
            <FormInput
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm 
  focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
  text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
              name="album_name"
              placeHolder="Enter Album Name"
              type="text"
              required
              label="Album Name"
              value={formik.values.album_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.album_name}
            />
          </div>
          <div className="mb-4">
            <SelectField
              label="Genre"
              value={formik.values.genre}
              placeholder="Select Role"
              options={genreOptions}
              disabled={false}
              onChange={(e: string) => {
                formik.setFieldValue("genre", e);
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
