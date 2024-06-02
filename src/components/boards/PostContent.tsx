import PostImage from "./PostImage";

interface PostContentProps {
  className?: string;
  title: string;
  content: string;
  image: string | null;
}

const PostContent = ({
  className,
  title,
  content,
  image,
}: PostContentProps) => {
  return (
    <div
      className={`flex min-h-72 w-full justify-between gap-12 ${className} [&>div:last-of-type]:shrink-0`}
    >
      <div className="text-20 line-clamp-2 font-semibold text-gray-800">
        {title}
      </div>
      {image && <PostImage src={image} alt={`${title} image`} />}
    </div>
  );
};

export default PostContent;
