import gatAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const Posts = async () => {
  const posts = await gatAllPosts();
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">This post Page</h1>
      {posts.map((post) => (
        <li key={post.id} className="underline">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Posts;

export const metadata = {
  title: "Posts Page",
  description: "This is post page",
};
