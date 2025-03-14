import type { Metadata } from "next";
import "./globals.css";
import Sider from "./components/Sider/sider";
import Search from "./components/Search/search";
import Play from "./components/Play/play";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Project 5",
  description: "Dự án nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang vi để hiển thị tiếng việt
    <html lang="vi"> 
      <body className="bg-[#292929]">
          <div className="container mx-auto">
              <div className="flex">
                <div className="w-[280px]">
                  <Sider/>
                </div>
                <div className="flex-1 ml-[20px]">
                  <Suspense>
                    <Search/>
                  </Suspense>
                  <main className="mt-[30px] mb-[120px]">
                    {children}
                  </main>
                </div>
              </div>
          </div>
          <Play/>
      </body>
    </html>
  );
}
