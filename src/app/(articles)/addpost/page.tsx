"use client";

import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BaseTextArea from "@/components/BaseTextArea";
import ImageInput from "@/components/ImageInput";
import { axiosInstance } from "@/lib/api/dispatcher";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddPost = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const getImageUrl = async () => {
    try {
      const form = new FormData();
      form.append("image", formData.image);

      const response = await axiosInstance.post("/images/upload", form);
      const imageUrl = response.data.url;

      setFormData((prevFormData) => ({
        ...prevFormData,
        image: imageUrl,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("content", formData.content);
    form.append("image", formData.image);

    const response = await axiosInstance.post("/articles", form);
    const id = response.id;
    router.replace(`/articles/${id}`);
  };

  return (
    <div>
      <div className="flex justify-between pt-36">
        <h1 className="text-20 font-bold">상품 등록하기</h1>
        <BaseButton className="h-42 w-74">등록</BaseButton>
      </div>
      <form>
        <label htmlFor="" className="font-bold">
          *제목
        </label>
        <BaseInput
          placeholder="제목을 입력해주세요"
          className="my-16"
          onChange={handleChange}
          required
        />
        <label htmlFor="" className="font-bold">
          *내용
        </label>
        <BaseTextArea
          placeholder="내용을 입력해주세요"
          className="my-16 h-200 xl:h-282"
          onChange={handleChange}
          required
        />
        <label htmlFor="" className="font-bold">
          이미지
        </label>
        <ImageInput
          placeholder="이미지 등록"
          className="my-16 h-168 w-168 xl:h-282 xl:w-282"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddPost;
