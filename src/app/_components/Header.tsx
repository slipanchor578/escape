import Link from "next/link";
import Container from "../../components/Container";
export default function Header() {
  return (
    <header className="bg-white border-b border-(--border-color) sticky top-0 z-100">
      <Container>
        <div className="flex justify-between items-center h-[70px]">
          <Link href="/" className="text-2xl font-bold tracking-[-0.5px]">
            My<span className="text-(--primary-color)">Blog</span>
          </Link>
          <nav className="flex gap-[10px]">
            <Link href="/">Home</Link>
            <Link href="/article">Article</Link>
            <Link href="/tag">Tags</Link>
            <Link href="#">About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
