import "./globals.css";
import { Titillium_Web } from "next/font/google";
import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutFooter from "@/components/layout/LayoutFooter";
import { Suspense } from "react";
import LayoutLoading from "@/components/layout/LayoutLoading";

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
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={TitilliumWeb.className}>
        <div className="app-container">
          <LayoutHeader />
          <Suspense fallback={<LayoutLoading />}>{children}</Suspense>
          <LayoutFooter />
        </div>
      </body>
    </html>
  );
}
