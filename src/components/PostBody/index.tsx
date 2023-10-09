import { MDXRemote } from "next-mdx-remote";

export default function Post({ content, date, title, tags }) {
  return (
    <>
      <h1 className="font-extrabold text-green-400 text-xl">{title}</h1>
      <div className="text-sm text-zinc-400">{date}</div>
      <div className="flex gap-2 mt-1">
        {tags.map((tag, i) => (
          <div className="bg-zinc-600 px-2 py-1 rounded text-xs" key={i}>
            {tag}
          </div>
        ))}
      </div>
      {content && (
        <div className="pt-4">
          {JSON.stringify(content)}
          {/* <MDXRemote source={content} /> */}
        </div>
      )}
    </>
  );
}
