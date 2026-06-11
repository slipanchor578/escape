// import { type Author } from "./author";

// export type Post = {
//   slug: string;
//   title: string;
//   date: string;
//   coverImage: string;
//   author: Author;
//   excerpt: string;
//   ogImage: {
//     url: string;
//   };
//   content: string;
//   preview?: boolean;
// };

// ここで記事の型を作る

export type Post = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  content: string;
};