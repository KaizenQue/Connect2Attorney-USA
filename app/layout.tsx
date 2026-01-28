import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Merriweather, Poppins, Playfair_Display,Urbanist,Noto_Serif,Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import EnquiryButton from "./components/EnquiryButton";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connect2Attorney",
  description: "Connect2Attorney - Your Trusted Legal Connection",
  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
  className={`
    ${geistSans.variable}
    ${geistMono.variable}
    ${inter.variable}
    ${merriweather.variable}
    ${poppins.variable}
    ${playfair.variable}
    ${urbanist.variable}
    ${notoSerif.variable} 
    ${workSans.variable}  
    antialiased
  `}
>


              <Script
          id="trustedform-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!(window && window.__PRERENDER_INJECTED)) {
                (function () {
                  var tf = document.createElement("script");
                  tf.type = "text/javascript";
                  tf.async = false;
                  tf.src =
                    (document.location.protocol === "https:" ? "https" : "http") +
                    "://api.trustedform.com/trustedform.js" +
                    "?field=xxTrustedFormCertUrl" +
                    "&ping_field=xxTrustedFormPingUrl" +
                    "&token_field=xxTrustedFormCertToken" +
                    "&l=" +
                    new Date().getTime() +
                    Math.random();
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(tf, s);
                })();
              }
            `,
          }}
        />
        <Navbar />
        <EnquiryButton />
        
        {children}

           {/*  TrustedForm NoScript Fallback */}
        <noscript>
          <img
            src="https://api.trustedform.com/ns.gif"
            alt="TrustedForm verification"
          />
        </noscript>
      </body>
    </html>
  );
}
