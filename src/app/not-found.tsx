import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/Links";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <>
      <PageIntro
        label="404"
        title="That page is not in the inventory."
        lead="The address may be out of date, or the page has moved. The main sections are linked below."
      />
      <Container className="pb-24">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/" className="rounded-full">
            Profile
          </ButtonLink>
          <ButtonLink href="/achievements" variant="secondary" className="rounded-full">
            Achievements
          </ButtonLink>
          <ButtonLink href="/recognition" variant="secondary" className="rounded-full">
            Recognition
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
