import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { axiosInstance } from "@/lib/api/dispatcher";
import { getCookie } from "cookies-next";
import useDataFetch from "@/hooks/useDataFetch";

const useFavoriteButton = (path: string, isFavorite, favoriteCount) => {
  const { user, setAuthHeaders } = useAuth();
  const [values, setValues] = useState({
    isLiked: isFavorite,
    likeCount: favoriteCount,
  });
  const { isLiked, likeCount } = values;
  const { axiosFetcher } = useDataFetch();

  const handleFavoriteClick = async (id: number) => {
    if (!user) return;

    // 좋아요한 경우 좋아요 삭제
    if (isLiked) {
      const options = setAuthHeaders({
        method: "DELETE",
        url: `/${path}/${id}/like`,
      });
      await axiosFetcher(options);
      setValues((prevValues) => ({
        ...prevValues,
        isLiked: false,
        likeCount: prevValues.likeCount - 1,
      }));
    } else {
      // 좋아요 안되어있는 경우 좋아요 추가
      const options = setAuthHeaders({
        method: "POST",
        url: `/${path}/${id}/like`,
      });
      await axiosFetcher(options);
      setValues((prevValues) => ({
        ...prevValues,
        isLiked: true,
        likeCount: prevValues.likeCount + 1,
      }));
    }
  };

  return { handleFavoriteClick, isLiked, likeCount };
};

export default useFavoriteButton;
