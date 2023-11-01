import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({ title, coverImage, date, excerpt, slug }) {
  return (
    <div className="flex flex-col gap-3">
      <CoverImage title={title} coverImage={coverImage} slug={slug} />
      <h3 className="font-bold text-2xl">
        <Link className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} href={`/posts/${slug}`}></Link>
      </h3>
      <Date dateString={date} />
      <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
}
