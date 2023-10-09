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
    <Card className="bg-zinc-800 flex flex-col p-4 shadow-lg gap-4">
      <div className="flex justify-between rounded-t-lg">
        <div className="font-extrabold text-green-400 text-xl">
          {post.title}
        </div>
        <div className="text-sm text-zinc-400">{post.date}</div>
      </div>
      <div className="flex gap-2">
        {post.tags.map((tag, i) => (
          <div className="bg-zinc-600 px-2 py-1 rounded text-xs !text-zinc-100">
            {tag}
          </div>
        ))}
      </div>
      <div className="">
        <MDXRemote source={post.content} />
      </div>
    </Card>
  );
}
