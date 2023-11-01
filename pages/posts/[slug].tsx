import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Tags from "../../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

export default function Post({ post, posts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? (
    <>Loading…</>
  ) : (
    <>
      <Head>
        <title>{post.title} | keattz.net</title>
        {post.featuredImage && <meta property="og:image" content={post.featuredImage.node.sourceUrl} />}
      </Head>
      <article className="bg-white rounded-lg">
        <PostHeader title={post.title} coverImage={post.featuredImage} date={post.date} categories={post.categories} />
        <PostBody content={post.content} />
        {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData }) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
