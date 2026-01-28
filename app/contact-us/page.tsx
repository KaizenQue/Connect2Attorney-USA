import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "https://connect2attorney.com/contact",
  },
};

export default function ContactUsPage() {
  return (
    <main>
      <ContactUsClient />
      <Footer />
    </main>
  );
}
