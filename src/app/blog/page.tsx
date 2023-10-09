import Card from "@/components/Card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getPosts();
  return (
    <Card className="bg-zinc-800 flex flex-col gap-2 p-2 shadow-lg">
      {posts.map((post) => {
        return (
          <Link
            className="p-2 rounded hover:bg-zinc-700 hover:text-green-400"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <h1 className="font-extrabold text-xl">{post.title}</h1>
            <div className="text-sm text-zinc-400">{post.date}</div>
            <div className="flex gap-2 mt-1">
              {post.tags.map((tag, i) => (
                <div className="bg-zinc-600 px-2 py-1 rounded text-xs !text-zinc-100">
                  {tag}
                </div>
              ))}
            </div>
          </Link>
        );
      })}
    </Card>
  );
}
