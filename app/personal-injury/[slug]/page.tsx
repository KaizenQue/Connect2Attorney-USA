import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PersonalInjuryClient from "./PersonalInjuryClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const VALID_SLUGS = [
  "sexual-abuse-lawsuit",
  "motor-vehicle-accident",
  "slip-and-fall",
  "18-wheeler-accident",
  "rideshare-sexual-assault-lawsuit",
];

export default async function Page({ params }: PageProps) {
  const { slug } = await params; //  REQUIRED

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  return <PersonalInjuryClient slug={slug} />;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params; //  REQUIRED

  const titleMap: Record<string, string> = {
    "sexual-abuse-lawsuit": "Sexual Abuse Lawsuit – Legal Help & Compensation",
    "motor-vehicle-accident":
      "Motor Vehicle Accident – Legal Help & Compensation",
    "slip-and-fall": "Slip and Fall – Legal Help & Compensation",
    "18-wheeler-accident": "18-Wheeler Accident – Legal Help & Compensation",
    "rideshare-sexual-assault-lawsuit":
      "Rideshare Sexual Lawsuit - Legal Help & Compensation",
  };

  if (!titleMap[slug]) {
    return {
      title: "Personal Injury Lawsuits",
      alternates: {
        canonical: "https://connect2attorney.com/personal-injury",
      },
    };
  }

  return {
    title: titleMap[slug],
    alternates: {
      canonical: `https://connect2attorney.com/personal-injury/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }));
}
