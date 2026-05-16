// app/pages/layout.tsx

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.className} flex h-screen`}>
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}