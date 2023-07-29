import WrapperTheme from "@/components/wrapper-theme";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const legueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Invoice App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={legueSpartan.className}>
        <WrapperTheme>{children}</WrapperTheme>
      </body>
    </html>
  );
}
