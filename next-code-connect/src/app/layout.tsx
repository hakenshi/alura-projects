import type { Metadata } from "next";
import "./globals.css"
import { Prompt } from "next/font/google"
import { Aside } from "@/components/Aside";
import "./fontawesome"
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Generated by create next app",
};

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ['latin'],
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${prompt.className} w-screen bg-gradient-to-t min-h-screen text-white from-[#0E1112] to-[#00090E]`}>
        <div className="flex w-full justify-center gap-5 p-5">
          <Aside />
          <div className="flex flex-col gap-4 items-center">
            <SearchBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
