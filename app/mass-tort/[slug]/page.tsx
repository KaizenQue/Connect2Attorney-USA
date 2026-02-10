import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MassTortClient from "./MassTortClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const VALID_SLUGS = [
  "ozempic-lawsuit",
  "mesothelioma-lawsuit",
  "depo-provera-lawsuit",
  "roundup-lawsuit",
  "talcum-powder-lawsuit",
];

export default async function Page({ params }: PageProps) {
  const { slug } = await params; //  REQUIRED

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  return <MassTortClient slug={slug} />;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params; //  REQUIRED

  const titleMap: Record<string, string> = {
    "ozempic-lawsuit":
      "Ozempic Lawsuit – Side Effects, Claims & Legal Help",
    "mesothelioma-lawsuit":
      "Mesothelioma Lawsuit – Asbestos Exposure & Compensation",
    "depo-provera-lawsuit":
      "Depo Provera Lawsuit – Brain Tumor Claims",
    "roundup-lawsuit":
      "Roundup Lawsuit – Cancer Claims & Settlements",
    "talcum-powder-lawsuit":
      "Talcum Powder Lawsuit – Ovarian Cancer Claims",
     
  };

  if (!titleMap[slug]) {
    return {
      title: "Mass Tort Lawsuits",
      alternates: {
        canonical: "https://connect2attorney.com/mass-tort",
      },
    };
  }

  return {
    title: titleMap[slug],
    alternates: {
      canonical: `https://connect2attorney.com/mass-tort/${slug}`,
    },
  };
}


export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }));
}
