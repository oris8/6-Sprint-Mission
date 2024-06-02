import BestPostList from "@/components/boards/BestPostList";
import NormalPostList from "@/components/boards/NormalPostList";
import BaseButton from "@/components/BaseButton";
import { axiosInstance } from "@/lib/api/dispatcher";

interface BoardsProps {
  searchParams: {
    keyword?: string;
    order?: string;
  };
}

const Boards = async ({ searchParams }: BoardsProps) => {
  const keyword = searchParams.keyword || "";
  const order = searchParams.order || "recent";

  const [articlesRes, bestArticlesRes] = await Promise.all([
    axiosInstance.get(`/articles?orderBy=${order}&keyword=${keyword}`),
    axiosInstance.get("/articles?page=1&pageSize=3&orderBy=like"),
  ]);

  const articles: Post[] = articlesRes.data.list;
  const bestList: Post[] = bestArticlesRes.data.list;

  return (
    <>
      <div className="text-20 font-bold text-cool-gray-800">베스트 게시글</div>
      <BestPostList data={bestList} className="mb-40 mt-16" />
      <div className="mb-16 flex items-center justify-between">
        <div className="text-20 font-bold text-cool-gray-800">게시글</div>
        <BaseButton className="h-42 w-88" as="Link" href="/addpost">
          글쓰기
        </BaseButton>
      </div>
      <NormalPostList data={articles} keyword={keyword} />
    </>
  );
};

export default Boards;
