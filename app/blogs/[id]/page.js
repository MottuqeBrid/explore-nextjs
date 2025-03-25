import { notFound } from "next/navigation";
import React from "react";

const BlogPage = async ({ params }) => {
  const { id } = await params;
  if (id === "5") {
    notFound();
  }
  return <div>The Blog id is {id}</div>;
};

export default BlogPage;
