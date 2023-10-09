import Card from "@/components/Card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import PostBody from "@/components/PostBody";
import Bio from "@/components/Bio";

export default function Blog() {
  const posts = getPosts();
  return (
    <div className="flex flex-col gap-4">
      <Bio />
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
    </div>
  );
}
