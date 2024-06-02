"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SearchInput from "@/components/SearchInput";
import SortDropdown from "@/components/SortDropdown";
import NormalPost from "@/components/boards/NormalPost";
import Pagination from "@/components/Pagination";
import usePagination from "@/hooks/usePagination";

interface NormalPostListProps {
  className?: string;
  data: Post[];
  keyword: string;
}
const LIMIT = 3;

const NormalPostList = ({
  className = "",
  data,
  keyword,
}: NormalPostListProps) => {
  const router = useRouter();
  const [order, setOrder] = useState<SortOptions>("recent");
  const {
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    goToPage,
    paginatedList,
  } = usePagination(data, LIMIT);

  const handleSearch = (query: string) => {
    router.replace(`/boards?keyword=${query}`);
  };

  const handleOrder = (order: SortOptions) => {
    router.replace(`/boards?order=${order}`);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-8 md:gap-16">
        <SearchInput
          placeholder="검색할 상품을 입력해주세요"
          defaultValue={keyword ? keyword : ""}
          onKeyDown={handleSearch}
        />
        <SortDropdown order={order} onClick={handleOrder} />
      </div>
      <div className={`flex h-480 flex-col ${className}`}>
        {data && data.length !== 0 ? (
          paginatedList.map((post) => (
            <NormalPost
              key={post.id}
              data={post}
              className="border-b border-gray-200"
            />
          ))
        ) : (
          <div className="flexcenter mt-64 flex-col py-16 text-20 font-medium text-gray-500">
            <Image
              src="/images/img_inquiry-empty.svg"
              alt="아무것도 없어요 u.u"
              width={140}
              height={140}
            />
            게시글이 없어요
          </div>
        )}
      </div>
      <Pagination
        className="mt-24"
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
      />
    </>
  );
};

export default NormalPostList;
