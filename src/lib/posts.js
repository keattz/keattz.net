import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPosts = () => {
  const posts = fs.readdirSync(postsDirectory);
  const postsData = posts.map((post) => {
    const fullPath = path.join(postsDirectory, post);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { ...data, slug: post.replace(".mdx", "") };
  });
  return postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};

export const getPost = (slug) => {
  const postPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, content };
};
