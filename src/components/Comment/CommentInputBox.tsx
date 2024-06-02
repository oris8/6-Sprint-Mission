"use client";

import { useState } from "react";
import BaseButton from "../BaseButton";
import BaseTextArea from "../BaseTextArea";
import { useAuth } from "@/contexts/AuthProvider";
import { useParams } from "next/navigation";
import useDataFetch from "@/hooks/useDataFetch";

const DEFAULT_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

interface CommentInputBoxProps {
  className?: string;
  label?: string;
  placeholder?: string;
}

const CommentInputBox = ({
  className,
  label = "Comment",
  placeholder = DEFAULT_PLACEHOLDER,
}: CommentInputBoxProps) => {
  const [inputValue, setInputValue] = useState("");
  const { id } = useParams();
  const { user, setAuthHeaders } = useAuth();
  const { axiosFetcher } = useDataFetch();

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddComment: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (!user) return;
    if (!inputValue.trim()) return;

    const options = setAuthHeaders({
      method: "POST",
      url: `articles/${id}/comments`,
      data: { content: inputValue },
    });
    axiosFetcher(options);
    setInputValue("");
  };

  return (
    <div className={`flex flex-col gap-16 ${className}`}>
      <label className="text-600 text-16 text-cool-gray-800">{label}</label>
      <BaseTextArea
        className="h-104 px-24 py-16"
        placeholder={placeholder}
        onChange={handleChange}
        value={inputValue}
      />
      <BaseButton
        className="ml-auto h-42 w-71 text-14"
        onClick={handleAddComment}
      >
        등록
      </BaseButton>
    </div>
  );
};

export default CommentInputBox;
