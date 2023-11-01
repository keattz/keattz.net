import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({ title, coverImage, date, excerpt, slug }) {
  return (
    <div className="bg-white rounded-lg">
      <CoverImage title={title} coverImage={coverImage} slug={slug} />
      <div className="flex flex-col gap-3 m-3">
        <h3 className="font-bold text-2xl">
          <Link className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} href={`/posts/${slug}`}></Link>
        </h3>
        <Date dateString={date} />
        <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </div>
  );
}
