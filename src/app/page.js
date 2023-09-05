import { BiSolidGame } from "react-icons/bi";

import Header from "./components/Header";
import GlowCards from "./components/Cards/GlowCards";
import LargeCards from "./components/Cards/LargeCards";
import CardContainer from "./components/Cards/CardContainer";
import HeroBanner from "./components/HeroBanner";




export default function Home() {

  return (
    <CardContainer>
      <HeroBanner/>
      <Header icon={BiSolidGame} iconSize={24} custom='text-teal-400' title={'Card Component'}/>
      <GlowCards />
      <LargeCards />
    </CardContainer>
  );
}
