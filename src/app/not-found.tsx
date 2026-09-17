import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Links";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="variant-root">
      <main id="main" className="flex-1">
        <PageIntro
          label="404"
          title="That page is not in the inventory."
          lead="The address may be out of date, or the page has moved. The design variants are linked below."
        />
        <Container className="pb-24">
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/">Design variants</ButtonLink>
            <ButtonLink href="/a" variant="secondary">
              Profile · variant A
            </ButtonLink>
          </div>
        </Container>
      </main>
    </div>
  );
}
