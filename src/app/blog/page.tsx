import Card from "@/components/Card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getPosts();
  return (
    <Card className="bg-gray-800 flex flex-col gap-4 p-4">
      {posts.map((post) => {
        return (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card className="bg-gray-700 duration-300 p-4 transition hover:bg-gray-600">
              <div className="flex justify-between">
                <h1>{post.title}</h1>
                <div className="text-gray-300">{post.date}</div>
              </div>
            </Card>
          </Link>
        );
      })}
    </Card>
  );
}
