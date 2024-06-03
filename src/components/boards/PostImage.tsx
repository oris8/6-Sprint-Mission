import Image from "next/image";

interface PostImageProps {
  src: string | null;
  alt: string;
}

const PostImage = ({ src, alt }: PostImageProps) => {
  return (
    <div className="rounded-8 relative h-72 w-72 overflow-hidden border-[0.75px] border-cool-gray-200">
      <Image
        src={src ? src : "/images/img_default.png"}
        alt={alt}
        fill
        sizes="100%, 100%"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default PostImage;
