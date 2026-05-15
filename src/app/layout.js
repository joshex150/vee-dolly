import "./globals.css";

import Nav from "./components/Nav/Nav";

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Vee Dolly | Writer",
  description:
    "Official home of Vee Dolly — essays, fiction, letters, and reflections on the things we carry quietly.",
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
