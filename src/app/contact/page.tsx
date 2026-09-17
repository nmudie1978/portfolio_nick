import { pageMetadata } from "@/lib/metadata";
import { Contact } from "@/components/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Nick Mudie about telecom architecture, BSS/OSS, transformation, service assurance or AI-native telecom operations.",
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}
