import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AdminWrapper } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freaky Fashion",
  description: "Latest and greatest from Freaky Fashion",
  icons: {
    icon: "/ecommerce/public/FreakyFashionLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="/FreakyFashionLogo.png" />
        <AdminWrapper>
          {children}
        </AdminWrapper>
      </body>
    </html>
  );
}
