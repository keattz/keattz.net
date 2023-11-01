import Date from "./date";
import CoverImage from "./cover-image";
import Categories from "./categories";

export default function PostHeader({ title, coverImage, date, categories }) {
  return (
    <>
      <div className="flex flex-col gap-3 p-3">
        <h1 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: title }} />
        <div>
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
      <CoverImage title={title} coverImage={coverImage} />
    </>
  );
}
