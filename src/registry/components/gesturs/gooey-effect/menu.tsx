import {
  GooeyMenu,
  GooeyMenuTrigger,
  GooeyMenuBefore,
  GooeyMenuAfter,
} from "@/components/gesturs/gooey/gooey-menu";
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaPlus,
} from "react-icons/fa";
import { FaGear, FaQuestion } from "react-icons/fa6";

export default function GooeyMenuDemo() {
  return (
    <div>
      <GooeyMenu 
      className="w-[50px] h-[350px]"
      direction="vertical">
        <GooeyMenuBefore>
          <FaGear />
          <FaQuestion />
        </GooeyMenuBefore>
        <GooeyMenuTrigger 
        className="peer-checked:rotate-45 peer-checked:bg-red-500 peer-checked:text-white"
        id="sharedemo">
          <FaPlus />
        </GooeyMenuTrigger>
      </GooeyMenu>
    </div>
  );
}
