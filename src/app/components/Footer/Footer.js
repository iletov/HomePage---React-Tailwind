"use client";
import React, { useContext } from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import { SideBarContext } from "@/context/Context";
import CardContainer from "../Cards/CardContainer";

const Footer = () => {
  const { expanded } = useContext(SideBarContext);
  return (
    <CardContainer>
      <footer className="-mt-[130px]">
        <div className="flex flex-col md:flex-row justify-around pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Useful Links</h3>
            <Link href={"#"}>Dashboard</Link>
            <Link href={"#"}>Statistics</Link>
            <Link href={"#"}>Users</Link>
            <Link href={"#"}>Inventory</Link>
            <Link href={"#"}>Rewards</Link>
            <Link href={"#"}>Tournaments</Link>
            <Link href={"#"}>Settings</Link>
            <Link href={"#"}>Help</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Our Games</h3>
            <Link href={"#"}>Roulete</Link>
            <Link href={"#"}>Jackpot</Link>
            <Link href={"#"}>Dice</Link>
            <Link href={"#"}>Tokens</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Eiusmod laboris sint adipisicing culpa enim nisi aliqua id
              adipisicing. Nostrud esse culpa labore ipsum ad sint sit. Proident
              mollit eu quis eiusmod. Proident mollit eu quis eiusmod.
            </p>
            <p>&copy; {new Date().getFullYear()} E~Shop. All rights reserved</p>
          </div>
        </div>
      </footer>
    </CardContainer>
  );
};

export default Footer;
