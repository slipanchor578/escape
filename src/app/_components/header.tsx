import Link from 'next/link';
import Container from '@/components/container';

export default function Header() {
  return (
    <header className="bg-white border-b border-(--border-color) sticky top-0 z-100">
      <Container>
        <div className="flex justify-between items-center h-17.5">
          <Link href="/" className="text-2xl font-bold tracking-[-0.5px]">
            My<span className="text-(--primary-color)">Blog</span>
          </Link>
          <nav className="flex gap-2.5">
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
