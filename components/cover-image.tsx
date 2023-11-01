import Image from "next/image";
import Link from "next/link";
import styles from "./cover-image.module.css";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  if (!coverImage) return null;

  const { sourceUrl } = coverImage.node;

  console.log(slug);

  return (
    <div>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <div className={styles.image} style={{ backgroundImage: `url(${sourceUrl})` }} />
        </Link>
      ) : (
        <Image width={600} height={400} alt={`Cover Image for ${title}`} src={sourceUrl} />
      )}
    </div>
  );
}
