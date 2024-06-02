"use client";

import CommentInputBox from "../Comment/CommentInputBox";
import Comment from "../Comment/Comment";
import EmptyComment from "../Comment/EmptyComment";
import { useAuth } from "@/contexts/AuthProvider";
import useDataFetch from "@/hooks/useDataFetch";
import usePagination from "@/hooks/usePagination";
import Pagination from "../Pagination";
import { useState } from "react";
import { useParams } from "next/navigation";

const CommentSection = ({ initialData }: any) => {
  const { user } = useAuth();
  const [values, setValues] = useState(initialData);
  const { nextCursor, list } = values;
  const { isLoading, axiosFetcher } = useDataFetch();
  const { id } = useParams();

  console.log(values);

  const goToNext = async () => {
    if (!nextCursor) return;
    const options = {
      method: "GET",
      url: `/articles/${id}/comments?limit=3`,
    };
    const res = await axiosFetcher(options);
    setValues(res);
  };

  const goToPrev = async () => {
    if (nextCursor - 6 < 0) return;
    const options = {
      method: "GET",
      url: `/articles/${id}/comments?limit=3&cursor=${nextCursor - 6}`,
    };
    const res = await axiosFetcher(options);
    setValues(res);
  };

  return (
    <>
      <CommentInputBox />
      {list.length > 0 ? (
        list.map((comment: Comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            isEditable={(user && comment.writer.id === user.id) || false}
          />
        ))
      ) : (
        <EmptyComment />
      )}
      <Pagination goToPrevPage={goToPrev} goToNextPage={goToNext} />
    </>
  );
};

export default CommentSection;
