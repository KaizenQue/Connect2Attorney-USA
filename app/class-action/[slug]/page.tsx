import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClassActionClient from "./ClassActionClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const VALID_SLUGS = [
  "tesla-autopilot-recall-lawsuit",
  "maclaren-hall-sex-abuse-lawsuit",
];

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // REQUIRED

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  return <ClassActionClient slug={slug} />;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params; //  REQUIRED

  const titleMap: Record<string, string> = {
    "tesla-autopilot-recall-lawsuit":
      "Tesla Autopilot Recall Lawsuit – Safety Concerns & Legal Help",
    "maclaren-hall-sex-abuse-lawsuit":
      "Maclaren Hall Sex Abuse Lawsuit – Survivor Rights & Compensation",
  };

  if (!titleMap[slug]) {
    return {
      title: "Class Action Lawsuits",
      alternates: {
        canonical: "https://connect2attorney.com/class-action",
      },
    };
  }

  return {
    title: titleMap[slug],
    alternates: {
      canonical: `https://connect2attorney.com/class-action/${slug}`,
    },
  };
}
 
export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }));
}
