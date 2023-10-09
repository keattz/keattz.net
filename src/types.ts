export type PostType = {
  content?: string;
  date: string;
  slug?: string;
  tags: string[];
  title: string;
};

export type NextPagePropsType = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
