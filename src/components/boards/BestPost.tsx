import BestBadge from "./BestBadge";
import PostInfo from "./PostInfo";
import PostContent from "./PostContent";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

interface BestPostProps {
  className?: string;
  data: Post;
}

const BestPost = ({ className = "", data }: BestPostProps) => {
  const { id, title, content, image, likeCount, createdAt, writer } = data;

  return (
    <div
      className={`${className} h-full w-full rounded-8 bg-cool-gray-100 px-24 pb-16`}
    >
      <BestBadge />
      <div className="mt-16">
        <Link href={`/post/${id}`}>
          <PostContent title={title} content={content} image={image} />
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-postInfo grid-areas-postInfo [&>.postInfoCreatedAt]:ml-auto [&>.postInfoCreatedAt]:grid-in-createdAt [&>.postInfoFavorites]:mr-auto [&>.postInfoFavorites]:grid-in-favorites [&>.postInfoWriter]:mr-8 [&>.postInfoWriter]:grid-in-writer">
        <PostInfo
          showProfile={false}
          writer={writer}
          likeCount={likeCount}
          createdAt={formatDate(createdAt)}
        />
      </div>
    </div>
  );
};

export default BestPost;
