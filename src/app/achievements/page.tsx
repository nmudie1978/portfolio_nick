import { pageMetadata } from "@/lib/metadata";
import { Achievements } from "@/components/site";

export const metadata = pageMetadata({
  title: "Achievements",
  description:
    "What Nick Mudie has delivered: Europe's first triple-play provisioning platform, Telia's first hybrid cloud and E2E observability platform, greenfield B2B BSS/OSS across Norway and Sweden, M-Pesa network delivery and OSS provisioning modernisation.",
  path: "/achievements",
});

export default function Page() {
  return <Achievements />;
}
