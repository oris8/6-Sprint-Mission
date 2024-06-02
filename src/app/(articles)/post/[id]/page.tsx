import { APP_BASE_URL } from "@/constants/common";
import Post from "@/components/post/Post";
import CommentSection from "@/components/post/CommentSection";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = encodeURIComponent(params.id);
  try {
    const [postResponse, commentsResponse] = await Promise.all([
      fetch(`${APP_BASE_URL}/articles/${id}`, { cache: "no-store" }),
      fetch(`${APP_BASE_URL}/articles/${id}/comments?limit=3`, {
        cache: "no-store",
      }),
    ]);
    if (!postResponse.ok || !commentsResponse.ok) {
      throw new Error("Failed to fetch data");
    }
    const postData: Post = await postResponse.json();
    const commentsData = await commentsResponse.json();

    return (
      <div className="h-auto">
        <Post initialData={postData} />
        <CommentSection initialData={commentsData} />
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error loading post.</div>;
  }
};

export default Page;
