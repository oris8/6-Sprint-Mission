import Image from "next/image";
import BaseButton from "@/components/BaseButton";
import BackIcon from "/public/images/ic_back.svg";

const EmptyComment = () => {
  return (
    <div className="flexcenter my-80 flex-col">
      <Image
        src="/images/img_reply-empty.png"
        alt="댓글이 없어요!"
        width={140}
        height={140}
      />
      <p className="text-400 text-center text-16 leading-24 text-cool-gray-400">
        아직 댓글이 없어요,
        <br />
        지금 댓글을 달아보세요!
      </p>

      <BaseButton
        className="flexcenter text-600 h-48 w-240 gap-10 rounded-40 text-18"
        as="Link"
        href="/boards"
      >
        목록으로 돌아가기
        <BackIcon />
      </BaseButton>
    </div>
  );
};

export default EmptyComment;
