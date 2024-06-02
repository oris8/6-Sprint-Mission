"use client";

import HeartIcon from "/public/images/ic_heart.svg";
import HeartActiveIcon from "/public/images/ic_heart-active.svg";
import { axiosInstance } from "@/lib/api/dispatcher";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import useFavoriteButton from "@/hooks/useFavoriteButton";
import { getCookie } from "cookies-next";
import useDataFetch from "@/hooks/useDataFetch";

interface FavoriteButtonProps {
  isFavorite: boolean;
  favoriteCount: number;
  onClick?: () => void;
  className?: string;
  id?: ID;
}

const FavoriteButton = ({
  isFavorite = false,
  favoriteCount,
  onClick,
  className = "",
  id,
}: FavoriteButtonProps) => {
  const { handleFavoriteClick, isLiked, likeCount } = useFavoriteButton(
    "articles",
    isFavorite,
    favoriteCount,
  );

  return (
    <button
      className={`flex cursor-pointer items-center gap-4 bg-transparent p-0 text-12 font-medium ${className}`}
      onClick={() => handleFavoriteClick(id)}
    >
      {isLiked ? (
        <HeartActiveIcon width="16" height="16" viewBox="0 0 24 24" />
      ) : (
        <HeartIcon
          width="16"
          height="16"
          styles="color: var(--color-cool-gray-500)"
        />
      )}
      {likeCount}
    </button>
  );
};

export default FavoriteButton;
