import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollButtons from "@/components/ScrollButtons";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const personalDetails = {
  name: "Mahmudul Hasan Jony",
  alternateName: ["MH Jony", "Jony", "Mahmudul Hasan"],
  jobTitle: "Full-Stack Web Developer",
  url: "https://vercel.com/jonym7293-3830s-projects", 
  email: "jonym7293@gmail.com",
  location: "Hazaribagh, Dhaka, Bangladesh",
  sameAs: [
    "https://www.linkedin.com/in/mahmudul-hasan-jony12/",
    "https://github.com/MHJony1", 
    "https://www.facebook.com/mh.jony.7798" 
  ]
};

export const metadata = {
  metadataBase: new URL(personalDetails.url),
  title: {
    default: "Mahmudul Hasan Jony | Full-Stack Developer in Bangladesh",
    template: "%s | Mahmudul Hasan Jony"
  },
  description: "Mahmudul Hasan Jony is a MERN Stack & Full-Stack Developer based in Dhaka, Bangladesh, building modern and scalable web applications with React, Next.js, and MongoDB.",
  keywords: [
    "Mahmudul Hasan Jony", "MH Jony", "Jony Developer", 
    "Full Stack Developer Bangladesh", "MERN Stack Developer Dhaka", 
    "React Developer Dhaka", "Frontend Developer Hazaribagh",
    "Software Engineer Bangladesh", "Next.js Expert Dhaka"
  ],
  authors: [{ name: "Mahmudul Hasan Jony" }],
  creator: "Mahmudul Hasan Jony",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalDetails.url,
    title: "Mahmudul Hasan Jony | Full-Stack Developer",
    description: "Professional Full-Stack web solutions and high-performance applications by Mahmudul Hasan Jony.",
    siteName: "Jony Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahmudul Hasan Jony - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmudul Hasan Jony | Software Engineer",
    description: "Building modern web experiences with the MERN stack.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "3xTfRXUs6iW9698yGww7p4GRMFnWWqcvUKyTpjR-3mw", // Replace this with your own search console code
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalDetails.name,
    "alternateName": personalDetails.alternateName,
    "jobTitle": [
      "Full-Stack Developer",
      "Frontend Developer",
      "MERN Stack Developer",
      "Software Engineer"
    ],
    "url": personalDetails.url,
    "image": `${personalDetails.url}/profile.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hazaribagh, Dhaka",
      "addressCountry": "Bangladesh"
    },
    "sameAs": personalDetails.sameAs,
    "description": metadata.description,
    "email": personalDetails.email
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-on-background font-body-md overflow-x-hidden`}>
        <Providers>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            {children}
            <ScrollButtons />
          </SmoothScroll>
        </Providers>
        <Script
          id="person-schema"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
