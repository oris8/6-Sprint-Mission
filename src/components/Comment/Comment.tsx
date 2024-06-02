import Image from "next/image";
import getTimeAgo from "@/utils/getTimeAgo";
import DeleteButton from "../DeleteButton";
import { useAuth } from "@/contexts/AuthProvider";
import useDataFetch from "@/hooks/useDataFetch";

interface CommentProps {
  comment: Comment;
  isEditable: boolean;
}

const Comment = ({ comment, isEditable }: CommentProps) => {
  const { writer, content, createdAt } = comment;
  const { image, nickname } = writer;
  const { setAuthHeaders } = useAuth();
  const id = comment.id;
  const { axiosFetcher } = useDataFetch();

  const handleDeleteButton = () => {
    const options = setAuthHeaders({
      method: "DELETE",
      url: `/comments/${id}`,
    });
    axiosFetcher(options);
  };

  return (
    <div className="flex flex-col gap-24 border-b border-cool-gray-100 pb-24">
      <div className="text-400 whitespace-pre-wrap text-16 text-cool-gray-800">
        {content}
      </div>
      {isEditable && <DeleteButton onClick={handleDeleteButton} />}
      <UserProfile image={image} nickname={nickname} updatedAt={createdAt} />
    </div>
  );
};

interface UserProfileProps {
  image?: string;
  nickname?: string;
  updatedAt: Date;
}

const UserProfile = ({
  image,
  nickname = "똑똑한 판다",
  updatedAt,
}: UserProfileProps) => {
  const commentTimeAgo = getTimeAgo(updatedAt);

  return (
    <div className="flex gap-8">
      <Image
        src={image || "/images/img_default-profile.png"}
        alt={`${nickname}의 프로필 이미지`}
        width={40}
        height={40}
        className="rounded-[50%]"
      />
      <div>
        <span className="text-400 text-14 text-cool-gray-500">{nickname}</span>
        <div className="text-400 mt-4 text-12 text-cool-gray-400 ">
          {commentTimeAgo}
        </div>
      </div>
    </div>
  );
};

export default Comment;
