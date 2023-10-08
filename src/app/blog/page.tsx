import Card from "@/components/Card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getPosts();
  return (
    <Card className="bg-zinc-800 flex flex-col gap-4 p-4 shadow-lg">
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <div className="duration-300 transition hover:text-green-400">
                <h1 className="font-extrabold	text-xl">{post.title}</h1>
                <div className="text-sm">{post.date}</div>
              </div>
            </Link>
            <div className="flex gap-2 mt-1">
              {post.tags.map((tag) => (
                <Link href={`/tag/${tag}`}>
                  <div className="bg-zinc-700 px-2 py-1 rounded text-xs transition hover:text-green-400">
                    {tag}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </Card>
  );
}
