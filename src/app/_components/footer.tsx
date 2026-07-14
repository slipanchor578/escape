import Container from '@/components/container';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-(--border-color) 
    py-7.5 text-center text-(--footer-color) text-sm">
      <Container>
        <p>&copy; 2026 MyBlog</p>
      </Container>
    </footer>
  );
}
