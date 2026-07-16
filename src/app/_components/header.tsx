import Link from 'next/link';
import Container from '@/components/container';

export default function Header() {
  return (
    <header className="sticky top-0 z-100 border-b border-(--border-color) bg-white">
      <Container>
        <div className="flex h-17.5 items-center justify-between">
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
