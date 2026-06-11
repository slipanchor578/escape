// ここで記事の型を作る

export type Post = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  content: string;
};