import Comments from "@/app/components/Comments";
import gatAllPosts from "@/lib/getAllPosts";
import gatPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await gatPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}
export default async function PostPage({ params }) {
  const { id } = await params;

  const postPromise = gatPost(id);
  const commentsPromise = getPostComments(id);

  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;
  return (
    <div className="mt-6 space-y-2">
      <h2 className="text-2xl font-bold text-sky-500">{post.title}</h2>
      <p className="opacity-65">{post.body}</p>
      {/* <Link className="" href="/posts">
        Go Back Post Page
      </Link> */}
      <Suspense fallback={<h1>Loading Comments...</h1>}>
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await gatAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
