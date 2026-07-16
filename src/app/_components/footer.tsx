import Container from '@/components/container';

export default function Footer() {
  return (
    <footer className="border-t border-(--border-color) bg-white py-7.5 text-center text-sm text-(--footer-color)">
      <Container>
        <p>&copy; 2026 MyBlog</p>
      </Container>
    </footer>
  );
}
