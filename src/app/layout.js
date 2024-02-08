import { Suspense } from "react";
import { Titillium_Web } from "next/font/google";
import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutFooter from "@/components/layout/LayoutFooter";
import LayoutLoading from "@/components/layout/LayoutLoading";
import LayoutTheme from "@/components/layout/LayoutTheme";

import "./globals.css";

const TitilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Blogs | NextJS 14",
  description: "Blog App developed on NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={TitilliumWeb.className}>
        <LayoutTheme>
          <div className="app-container">
            <LayoutHeader />
            <Suspense fallback={<LayoutLoading />}>{children}</Suspense>
            <LayoutFooter />
          </div>
        </LayoutTheme>
      </body>
    </html>
  );
}
