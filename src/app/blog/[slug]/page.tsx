import Card from "@/components/Card";
import PostBody from "@/components/PostBody";
import { NextPagePropsType } from "@/types";
import { getPost, getPosts } from "@/lib/posts";

export function generateMetadata({ params }: NextPagePropsType) {
  const post = getPost(params.slug);
  return {
    title: post.title,
    date: post.date,
  };
}

export default function Post({ params }: NextPagePropsType) {
  const post = getPost(params.slug);
  return (
    <Card className="bg-zinc-800 flex flex-col p-4 shadow-lg">
      <PostBody {...post} />
    </Card>
  );
}
