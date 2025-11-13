import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { metadataCompany } from "@/app/constants/constants";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(metadataCompany.metadataBase),
  title: {
    default: metadataCompany.title,
    template: `%s | ${metadataCompany.title}`,
  },
  description: metadataCompany.description,
  openGraph: {
    title: metadataCompany.title,
    description: metadataCompany.description,
    url: "/",
    siteName: metadataCompany.title,
    locale: 'es_ES',
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
