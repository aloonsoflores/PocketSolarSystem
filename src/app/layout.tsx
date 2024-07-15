import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./utilidades/ui/navbar";
import Footer from "./utilidades/ui/footer";
import { chakra, inter } from "./utilidades/ui/fonts";
import Breadcrumbs from "@/app/utilidades/ui/caminoDeMigas/CaminoDeMigas";

export const metadata: Metadata = {
  title: "Pocket Solar System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* <script src="http://localhost:8097"></script> */}</head>
      <body className={`${chakra.className} antialiased`}>
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
