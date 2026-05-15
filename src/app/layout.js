import "./globals.css";

import Nav from "./components/Nav/Nav";

import { ViewTransitions } from "next-view-transitions";

const siteUrl = "https://veedolly.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Vee Dolly | Writer",
    template: "%s | Vee Dolly",
  },
  description:
    "Official home of Vee Dolly — romance, horror, and self-help from author Victory Christian. Essays, fiction, letters, and honest reflections on the things we carry quietly.",
  keywords: [
    "Vee Dolly",
    "Victory Christian",
    "romance author",
    "horror writer",
    "self-help author",
    "Nigerian author",
    "fiction writer",
    "essays",
    "letters",
    "newsletter",
  ],
  authors: [{ name: "Victory Christian", url: siteUrl }],
  creator: "Victory Christian",
  publisher: "Vee Dolly",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vee Dolly",
    title: "Vee Dolly | Writer",
    description:
      "Official home of Vee Dolly — romance, horror, and self-help from author Victory Christian.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Vee Dolly — Writer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vee Dolly | Writer",
    description:
      "Official home of Vee Dolly — romance, horror, and self-help from author Victory Christian.",
    images: ["/og-image.svg"],
    creator: "@veedolly",
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{if(localStorage.getItem('vd-theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
            }}
          />
          <Nav />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
