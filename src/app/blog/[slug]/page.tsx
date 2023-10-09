import Card from "@/components/Card";
import PostBody from "@/components/PostBody";

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
  const { title, date, tags, content } = getPost(params.slug);
  return (
    <Card className="bg-zinc-800 flex flex-col p-4 shadow-lg">
      <h1 className="font-extrabold text-green-400 text-xl">{title}</h1>
      <div className="text-sm text-zinc-400">{date}</div>
      <div className="flex gap-2 mt-1">
        {tags.map((tag, i) => (
          <div className="bg-zinc-600 px-2 py-1 rounded text-xs" key={i}>
            {tag}
          </div>
        ))}
      </div>
      {content && (
        <div className="pt-4">
          <MDXRemote source={content} />
        </div>
      )}
    </Card>
  );
}
