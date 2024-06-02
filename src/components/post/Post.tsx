"use client";

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import FavoriteButton from "@/components/FavoriteButton";
import { useAuth } from "@/contexts/AuthProvider";
import useDataFetch from "@/hooks/useDataFetch";

const Post = ({ initialData }: { initialData: Post }) => {
  const { user } = useAuth();
  const { isLoading, axiosFetcher } = useDataFetch();
  const [data, setData] = useState<Post>(initialData);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `articles/${data.id}`,
        headers: {
          Authorization: `Bearer ${getCookie("access-token")}`,
          "x-refresh-token": `${getCookie("refresh-token")}`,
        },
      };
      const res = await axiosFetcher(options);
      console.log(res);
      setData(res.data);
    };

    fetchData();
    console.log(data.isLiked);
  }, [user, data.id]);

  return (
    <>
      {!isLoading && (
        <>
          <div className="border-b-1 border-cool-gray-200 py-16">
            <h1 className="text-700 mb-16 text-20 leading-24 text-cool-gray-800">
              {data.title}
            </h1>
            <div className="flex items-center gap-8">
              <Image
                src="/images/img_default-profile.png"
                alt="Default profile image"
                width={24}
                height={24}
              />
              <span>{data.writer.nickname}</span>
              <span className="border-r border-cool-gray-200 pr-8 text-12 text-cool-gray-400">
                {formatDate(data.createdAt)}
              </span>
              <FavoriteButton
                id={data.id}
                isFavorite={data.isLiked || false}
                favoriteCount={data.likeCount}
              />
            </div>
          </div>

          <div className="text-400 min-h-180 py-16 text-16 leading-24 text-cool-gray-800">
            {data.content}
            {data.image && (
              <Image
                src={data.image}
                alt={
                  data.image ? "User uploaded image" : "Default profile image"
                }
                width={140}
                height={140}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Post;
