import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

const formatDate = (date) => {
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
const tagify = (tags) => tags.split(",").map((tag) => tag.trim());

export const getPosts = () => {
  const posts = fs.readdirSync(postsDirectory);
  const postsData = posts.map((post) => {
    const fullPath = path.join(postsDirectory, post);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    return {
      ...data,
      date: formatDate(data.date),
      slug: post.replace(".mdx", ""),
      tags: tagify(data.tags),
    };
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
  return {
    ...data,
    content,
    date: formatDate(data.date),
    tags: tagify(data.tags),
  };
};
