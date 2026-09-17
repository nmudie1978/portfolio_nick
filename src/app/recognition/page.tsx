import { pageMetadata } from "@/lib/metadata";
import { Recognition } from "@/components/site";

export const metadata = pageMetadata({
  title: "Recognition",
  description:
    "The body of work behind the profile: the vendor-neutral BSS/OSS Academy, the Telco Landscape, an interactive telecom architecture model, architecture patterns and selected thinking on catalog-driven design, composability, migration, Agentic NOC, AI infrastructure and ODA.",
  path: "/recognition",
});

export default function Page() {
  return <Recognition />;
}
