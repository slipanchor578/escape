import Container from "../../components/container"
export default function Footer() {
  return (
    <footer className="bg-white border-t border-(--border-color) 
    py-[30px] text-center text-(--footer-color) text-sm">
      <Container>
        <p>&copy; 2026 MyBlog</p>
      </Container>
    </footer>
  );
}
