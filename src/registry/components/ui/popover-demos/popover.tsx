"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Popover } from "@/components/ui/popover";
import { BellIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PopoverDemo() {
  return (
    <div>
      <DialogTrigger>
        <Button size="icon">
          <BellIcon />
        </Button>
        <Popover showArrow>
          <div className="flex flex-col">
            <Notification
              avatar="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Sonja Balmann"
              time="2h"
              text="This looks great! Let's ship it."
            />
            <Notification
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Maia Pettegree"
              time="4h"
              text="Can you add a bit more pizzazz?"
            />
            <Notification
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              name="Charles Webb"
              time="1d"
              text="Here's a first pass. What do you think?"
            />
          </div>
        </Popover>
      </DialogTrigger>
    </div>
  );
}

function Notification({
  avatar,
  name,
  time,
  text,
}: {
  avatar: string;
  name: string;
  time: string;
  text: string;
}) {
  return (
    <Link
      href="#"
      className="p-2 group rounded-lg hover:bg-blue-400 flex gap-x-2 text-[inherit] no-underline outline-none focus-visible:ring-2 ring-pink-800"
    >
      <Avatar src={avatar} sizes="sm" />
      <div>
        <div className="text-foreground  font-semibold leading-5">{name}</div>
        <div className="text-sm text-muted-foreground group-hover:text-zinc-900 col-span-2 transition-colors duration-150">
          Commented {time} ago
        </div>
        <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 mt-1 mb-0 col-span-2">
          {text}
        </p>
      </div>
    </Link>
  );
}
