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
    <Card className="bg-zinc-800 flex flex-col p-0 shadow-lg">
      <div className="text-green-400 flex justify-between p-4 rounded-t-lg w-100">
        <div className="font-extrabold text-xl">{post.title}</div>
        <div className="text-sm">{post.date}</div>
      </div>
      <div className="pb-4 px-4">
        <MDXRemote source={post.content} />
      </div>
    </Card>
  );
}
