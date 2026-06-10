// 事前にfront matter を含めたmdの形式をtypeで作っておく。
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// . + _posts = /home/nakai288/prac/blog2/_posts
const postsDirectory = join(process.cwd(), "_posts");

// _posts内の記事のファイル名配列が返る。[ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ]
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  // ファイル名から.mdが取られる
  const realSlug = slug.replace(/\.md$/, "");
  // /home/nakai288/prac/blog2/_posts/dynamic-routing.md こういうのができる
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  // ファイルを文字列として読み込む。この時点ではまだ.md => html 化していない。「## Lorem Ipsum」みたいな感じでそのまま
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // dataにはハッシュでfront matter の内容が入る
  // data.title = "Dynamic Routing and Static Generation" みたいな
  // data.author.name = "JJ Kasper" みたいにネストされる
  // content = front matter より下の記事の内容がそのまま文字列で入る
  const { data, content } = matter(fileContents);

  // front matter の情報
  // 後で/posts/dynamic-routing みたいに使えるように、ファイル名から拡張子を取ったものをslugとして
  // 後は記事内容をcontentとしてまとめたPostオブジェクトを返す
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  // 拡張子を取った記事ファイル名を全取得
  const slugs = getPostSlugs();
  // ここで記事オブジェクトを生成
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
  // 日付の新しい記事順に並び替えた記事配列を返す
}
// 例えば
// post1.date = 2026-06-08
// post2.date = 2025-06-08
// の場合post1の方が文字列的に大きいので-1を返す
// 結果、post2より先に来るので、降順(新しい記事順)に並ぶ
// ただの文字列だが、ISO-8601形式なので結果的に日付で並び替えることができる
