import Context, { SideBarContext } from "@/context/Context";
import NavBar from "./components/Navbar/NavBar";
import SideNav from "./components/SideBar/SideNav";
import SmallNav from "./components/Navbar/SmallNav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CS:GO Homework",
  description: "Super cool project",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>
          <div className="h-screen flex">
            <SideNav />
            <div className="w-screen">
                {/* <SmallNav /> */}
                <NavBar />
              {children}
              <Footer />
            </div>
          </div>
        </Context>
      </body>
    </html>
  );
}
