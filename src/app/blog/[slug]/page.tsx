import Card from "@/components/Card";

import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/lib/posts";

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return {
    title: post.title,
    date: post.date,
  };
}

export default function Post({ params }) {
  const post = getPost(params.slug);
  return (
    <Card className="bg-gray-800 flex flex-col p-0">
      <div className="bg-gray-600 flex justify-between p-4 rounded-t-lg w-100">
        <h1>{post.title}</h1>
        <div className="text-gray-300">{post.date}</div>
      </div>
      <div className="p-4">
        <MDXRemote source={post.content} />
      </div>
    </Card>
  );
}
