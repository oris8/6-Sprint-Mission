"use client";

import { useState } from "react";
import BaseInput from "@/components/BaseInput";
import PlusIcon from "/public/images/ic_plus.svg";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

interface Props {
  className?: string;
  placeholder?: string;
  value?: string | string[];
  onChange?: React.ChangeEventHandler;
  onKeyDown?: () => void;
}

const ImageInput = ({ className, placeholder, value }: Props) => {
  const [previewImg, setPreviewImg] = useState("");

  const handleUploadFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;

    if (files) {
      let fileURL;
      const reader = new FileReader();
      reader.onload = () => {
        fileURL = reader.result as string;
        if (fileURL) {
          setPreviewImg(fileURL);
          value = [fileURL];
        }
      };

      files && reader.readAsDataURL(files[0]);
    }
  };

  const handleDeleteFile = () => {
    setPreviewImg("");
    value = [];
  };

  return (
    <div className={`min-w-168 min-h-168 flex gap-8  ${className}`}>
      <label
        htmlFor="itemImages"
        className="flexcenter min-w-168 min-h-168 rounded-12 xl:w-282 xl:h-282 h-full w-full flex-col gap-12 bg-cool-gray-100"
      >
        <PlusIcon className="h-48 w-48" />
        <p className="text-16 text-400 text-cool-gray-400">{placeholder}</p>
        <BaseInput
          id="itemImages"
          name="itemImages"
          type="file"
          accept="image/*"
          onChange={handleUploadFile}
          value={value}
          className="hidden"
        />
      </label>
      {previewImg && (
        <div className="min-w-168 min-h-168 rounded-12 xl:w-282 xl:h-282 relative h-full w-full">
          <Image alt={previewImg} src={previewImg} fill />
          <DeleteButton
            onClick={handleDeleteFile}
            className="absolute right-8 top-8 bg-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
