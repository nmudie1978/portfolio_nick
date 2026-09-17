import { ArchitectureModel } from "@/components/shared/ArchitectureModel";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Architecture model",
  description:
    "An interactive map of BSS/OSS architecture: product, service and resource layers across catalog, orders, inventory and assurance. Select a lens to see what each part controls.",
  path: "/recognition/architecture-model",
});

export default function ArchitectureModelPage() {
  return <ArchitectureModel />;
}
