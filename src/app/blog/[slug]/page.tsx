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
      <PostBody title={title} date={date} tags={tags} content={content} />
    </Card>
  );
}
