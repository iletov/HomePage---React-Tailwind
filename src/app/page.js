import { BiSolidGame } from "react-icons/bi";
import GlowCards from "./components/GlowCards";
import LargeCards from "./components/LargeCards";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className="bg-background text-slate-100 flex-grow p-4 pl-[21%] pt-[9%]">
      <Header icon={BiSolidGame} iconSize={24} custom='text-teal-400' title={'Card Component'}/>
      <GlowCards />
      <LargeCards />
    </div>
  );
}
