import "../styles/globals.css";
import { Open_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Kelsey",
  description: "Welcome to my website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>
        {children}
        <Sidebar />
      </body>
    </html>
  );
}
