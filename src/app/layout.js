import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SideNav from "./components/SideBar/SideNav";
import SmallNav from "./components/SmallNav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CS:GO Homework",
  description: "Super cool project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex">
          {/* <SideBar /> */}
          <SideNav/>
          <div className="w-screen">
            <SmallNav />
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
