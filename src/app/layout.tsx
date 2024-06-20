import type { Metadata } from "next";

import Header from "app/components/shared/header";
import NavBar from "app/components/shared/nav";
import Footer from "app/components/shared/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "PokeMarket",
  description: "¡Consiguelos a todos al mejor precio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center flex-col min-h-screen">
        <Header />
        <NavBar />
        <main className="flex flex-col max-w-7xl w-full justify-center items-center p-4 grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
