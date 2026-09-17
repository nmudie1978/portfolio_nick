import { pageMetadata } from "@/lib/metadata";
import { Skills } from "@/components/site";

export const metadata = pageMetadata({
  title: "Skills",
  description:
    "Professional capability organised by domain: architecture and transformation, BSS/OSS, operations and assurance, AI and modern telecom, cloud and infrastructure.",
  path: "/skills",
});

export default function Page() {
  return <Skills />;
}
