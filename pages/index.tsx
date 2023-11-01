import Head from "next/head";
import { GetStaticProps } from "next";
import Posts from "../components/posts";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Head>
        <title>keattz.net</title>
      </Head>
      {allPosts.edges.length > 0 && <Posts posts={allPosts.edges} />}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
