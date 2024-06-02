import PostInfo from "./PostInfo";
import PostContent from "./PostContent";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

interface NormalPostProps {
  className?: string;
  data: Post;
}

const NormalPost = ({ className = "", data }: NormalPostProps) => {
  const { id, title, content, image, likeCount, createdAt, writer } = data;

  return (
    <div className={`mt-24 min-h-136 w-full min-w-343 bg-white ${className}`}>
      <Link href={`/post/${id}`}>
        <PostContent title={title} content={content} image={image} />
      </Link>
      <div className="flex items-center pt-16 [&>.postInfoFavorites]:ml-auto [&>.postInfoWriter]:mr-8">
        <PostInfo
          writer={writer}
          likeCount={likeCount}
          createdAt={formatDate(createdAt)}
        />
      </div>
    </div>
  );
};

export default NormalPost;
