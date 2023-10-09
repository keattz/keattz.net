import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostType } from "@/types";

const postsDirectory = path.join(process.cwd(), "posts");

const formatDate = (date: number): string => {
  const dateObject = new Date(1000 * date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedTime = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  return `${formattedDate} at ${formattedTime}`;
};
const formatTag = (tags: string): string[] =>
  tags.split(",").map((tag) => tag.trim());

export const getPost = (slug: string): PostType => {
  const postPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    content,
    date: formatDate(data.date),
    tags: formatTag(data.tags),
    title: data.title,
  };
};

export const getPosts = (): PostType[] => {
  const posts = fs.readdirSync(postsDirectory);
  const postsData = posts.map((post) => {
    const fullPath = path.join(postsDirectory, post);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    return {
      date: formatDate(data.date),
      slug: post.replace(".mdx", ""),
      tags: formatTag(data.tags),
      title: data.title,
    };
  });
  return postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};
