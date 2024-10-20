import type { Metadata } from "next";
import "./styles/globals.scss";
import Header from "@components/Header";
import localFont from "next/font/local";
import Footer from "@components/Footer";


 
const dancingFont = localFont({
  src: "./fonts/DancingScript-VariableFont_wght.ttf",
  variable: "--font-dancing",
  weight: "400",
});
const loraFont = localFont({
  src: "./fonts/Lora-VariableFont_wght.ttf",
  variable: "--font-lora", // CSS változó név
  display: "swap", // Optional, for better performance
});


export const metadata: Metadata = {
  title: "Kóstolj Bele!",
  description: "Receptgyűjtő alkalmazás",
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Thomas Horvath'}], 
  icons: {
    icon:"/favicon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${loraFont.variable} ${dancingFont.variable}`}>
      <body>
        <Header />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
