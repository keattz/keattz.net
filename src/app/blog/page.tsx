import Card from "@/components/Card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import PostBody from "@/components/PostBody";

export default function Blog() {
  const posts = getPosts();
  return (
    <Card className="bg-zinc-800 flex flex-col gap-2 p-2 shadow-lg">
      {posts.map((post) => {
        return (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="p-2 rounded transition hover:bg-zinc-700">
              <PostBody {...post} />
            </div>
          </Link>
        );
      })}
    </Card>
  );
}
