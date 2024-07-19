"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Popover } from "@/components/ui/popover";
import React from "react";

export default function PopoverDemo() {
  return (
    <div>
      <DialogTrigger>
        <Button>Open Dialog</Button>
        <Popover showArrow
        className="focus:outline-none focus:ring-0">
          <Dialog className="z-30">
            <div className="p-20">
              <p>Popover content</p>
            </div>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </div>
  );
}

