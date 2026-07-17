import Link from 'next/link';
import Container from '@/components/container';

export default function Header() {
  return (
    <header className="sticky top-0 z-100 bg-(--subbody-color)">
      <Container>
        <div className="flex h-17.5 items-center justify-between max-md:h-auto max-md:flex-col max-md:gap-2.5 max-md:px-0 max-md:py-3.75">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[-0.5px] text-white"
          >
            SlipAnchorの技術ブログ
          </Link>
          <nav className="flex gap-2.5 [&_a]:text-white [&_a]:hover:underline">
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
