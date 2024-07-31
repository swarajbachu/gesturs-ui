import {
  GooeyMenu,
  GooeyMenuTrigger,
  GooeyMenuBefore,
  GooeyMenuAfter,
} from "@/components/gesturs/gooey/gooey-menu";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShare,
  FaTwitter,
} from "react-icons/fa";

export default function ShareDemo() {
  return (
    <div>
      <GooeyMenu>
        <GooeyMenuBefore>
          <FaLinkedin />
          <FaInstagram />
        </GooeyMenuBefore>
        <GooeyMenuTrigger>
          <FaShare />
        </GooeyMenuTrigger>
        <GooeyMenuAfter>
          <FaFacebook />
          <FaTwitter />
        </GooeyMenuAfter>
      </GooeyMenu>
    </div>
  );
}
