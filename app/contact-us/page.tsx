import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "https://connect2attorney.com/contact-us",
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
