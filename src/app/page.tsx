import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      <Container withPaddingBlock>
        {Array(100)
          .fill(null)
          .map((_, i) => (
            <p key={i}>Hello world!</p>
          ))}
      </Container>
    </main>
  );
}
