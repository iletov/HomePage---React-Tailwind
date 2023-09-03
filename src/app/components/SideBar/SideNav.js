import React from 'react'
import SidebarToggle, { SidebarItem } from '../SidebarToggle'
import { GiOpenTreasureChest, GiSettingsKnobs, GiHelp } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { TbTournament } from "react-icons/tb";
import { AiOutlinePieChart, AiOutlineUsergroupAdd, AiOutlineTrophy } from "react-icons/ai";

const SideNav = () => {
  return (
    <SidebarToggle>
      <SidebarItem icon={<RxDashboard size={20}/>} text='Dashboard' />
      <SidebarItem icon={<AiOutlinePieChart size={20}/>} text='Statistics' />
      <SidebarItem icon={<AiOutlineUsergroupAdd size={20}/>} text='Users' />
      <SidebarItem icon={<GiOpenTreasureChest size={20}/>} text='Inventory' />
      <SidebarItem icon={<AiOutlineTrophy size={20}/>} text='Rewards' />
      <SidebarItem icon={<TbTournament size={20}/>} text='Tournaments' />
      <SidebarItem icon={<GiSettingsKnobs size={20}/>} text='Settings' />
      <SidebarItem icon={<GiHelp size={20}/>} text='Help' />
    </SidebarToggle>
  )
}

export default SideNav