import {
  GooeyMenu,
  GooeyMenuTrigger,
  GooeyMenuBefore,
  GooeyMenuAfter,
} from "@/components/gesturs/gooey/gooey-share";
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
      <GooeyMenu direction="vertical">
        <GooeyMenuBefore>
          <FaFacebook />
          <FaTwitter /> 
          <FaLinkedin />
          <FaInstagram />
        </GooeyMenuBefore>
        <GooeyMenuTrigger>
          <FaShare />
        </GooeyMenuTrigger>
        <GooeyMenuAfter>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </GooeyMenuAfter>
      </GooeyMenu>
    </div>
  );
}
