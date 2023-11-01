import PostPreview from "./post-preview";

export default function Posts({ posts }) {
  return (
    <section className="flex flex-col gap-5">
      {posts.map(({ node }) => (
        <PostPreview
          key={node.slug}
          title={node.title}
          coverImage={node.featuredImage}
          date={node.date}
          slug={node.slug}
          excerpt={node.excerpt}
        />
      ))}
    </section>
  );
}
