import { pageMetadata } from "@/lib/metadata";
import { Experience } from "@/components/site";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "The career progression of Nick Mudie: from telecom operations and service assurance through architecture into BSS/OSS, transformation and AI-native telecom — at Telia, Telenor, Vodafone, UPC and Marlink.",
  path: "/experience",
});

export default function Page() {
  return <Experience />;
}
