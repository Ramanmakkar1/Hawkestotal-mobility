import Link from "next/link";
import { CallButtons, Container, SectionHeading } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-mist py-20 lg:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Page not found"
          title="Sorry, we couldn’t find that page."
          intro="The page may have moved. You can head back to the home page, or call us and we’ll help you straight away."
          center
          className="max-w-[720px]"
        />
        <CallButtons className="mt-10 justify-center" />
        <p className="mt-6 text-center">
          <Link href="/" className="font-semibold text-brand hover:underline">
            Back to home
          </Link>
        </p>
      </Container>
    </section>
  );
}
