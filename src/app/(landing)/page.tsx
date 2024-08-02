import LineSvg from "@/components/site-specific/layout/line-svg";
import CardWrapper from "@/components/site-specific/pages/hero/card-wrapper";
import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextField } from "@/components/ui/text-field";
import AvatarDemo3 from "@/registry/components/ui/avatar-demos/avatar-dot";
import AvatarDemo from "@/registry/components/ui/avatar-demos/avatar-border";
import AvatarDemo2 from "@/registry/components/ui/avatar-demos/avatar-shape";
import BadgeDemo from "@/registry/components/ui/badge-demos/badge-colors";
import { ArrowRightIcon, Search } from "lucide-react";
import React from "react";
import PopoverDemo from "@/registry/components/ui/popover-demos/popover";
import StickyMouseDemo from "@/registry/components/gesturs/sticky-mouse/button";
import PopImagesParagraph from "@/registry/components/gesturs/pop-images/preview";
import GooeyMenuDemo from "@/registry/components/gesturs/gooey-effect/menu";
import GooeyShareDemo from "@/registry/components/gesturs/gooey-effect/share";
import SwipeCardDemo from "@/registry/components/gesturs/swipe-cards/preview";

export default function Home() {
  return (
    <section className="relative grid gap-[17px] sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]">
      <LineSvg className="absolute -top-[9px] left-0 right-0 row-start-2 ml-[calc(50%-50vw)] h-px w-screen" />
      <LineSvg className="absolute -top-[9px] left-0 right-0 row-start-3 ml-[calc(50%-50vw)] h-px w-screen" />
      <LineSvg className="absolute -top-[9px] left-0 right-0 row-start-4 ml-[calc(50%-50vw)] h-px w-screen xl:top-2" />
      <LineSvg className="absolute -top-[9px] left-0 right-0 row-start-5 ml-[calc(50%-50vw)] h-px w-screen xl:hidden" />
      <LineSvg className="absolute -top-[9px] left-0 right-0 row-start-6 ml-[calc(50%-50vw)] h-px w-screen md:top-2 xl:hidden" />
      <LineSvg className="absolute -top-[9px] left-0 right-0 row-start-7 ml-[calc(50%-50vw)] h-px w-screen sm:top-2 md:hidden" />
      <LineSvg className="absolute left-0 right-0 top-2 row-start-8 ml-[calc(50%-50vw)] h-px w-screen sm:hidden" />
      <LineSvg className="absolute -left-[9px] top-[-88px] col-start-1 h-[calc(100%+88px+160px)] w-px" />
      <LineSvg className="absolute -left-[9px] top-[-88px] hidden h-[calc(100%+88px+160px)] w-px sm:col-start-2 sm:block xl:col-start-6" />
      <LineSvg className="absolute -left-[9px] top-[-88px] col-start-7 hidden h-[calc(100%+88px+160px)] w-px xl:block" />
      <LineSvg className="absolute -left-[9px] top-[-88px] col-start-10 hidden h-[calc(100%+88px+160px)] w-px xl:block" />
      <LineSvg className="absolute -left-[9px] top-[-88px] col-start-11 hidden h-[calc(100%+88px+160px)] w-px xl:block" />
      <LineSvg className="absolute -right-2 top-[-88px] col-start-3 h-[calc(100%+88px+160px)] w-px translate-x-1/2 sm:col-start-4 xl:col-start-[16]" />

      <div className="relative xl:col-span-6">
        <CardWrapper>
          <div className="flex justify-center items-center flex-col gap-2">
            <GooeyShareDemo />
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-9">
        <CardWrapper>
          <div className="flex gap-2">
            <SwipeCardDemo />
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-5">
        <CardWrapper>
          <div className="flex gap-2">
            <Button>Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-5">
        <CardWrapper>
          <div className="flex gap-2">
            <Breadcrumbs>
              <Breadcrumb href="#">Home</Breadcrumb>
              <Breadcrumb href="#">Components</Breadcrumb>
              <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
            </Breadcrumbs>
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-5">
        <CardWrapper>
          <div className="w-full flex justify-start flex-col gap-2">
            <h3 className="text-xl font-bold">Welcome to the site</h3>
            <Input placeholder="Search" leftSection={<Search />} />
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-6">
        <CardWrapper>
          <div className="w-full flex justify-start flex-col gap-4">
            <h3 className="text-base font-bold">Sign In</h3>
            <TextField label="Email" placeholder="email" />
            <TextField label="Password" placeholder="password" />
            <Button fullWidth rightSection={<ArrowRightIcon />}>
              Sign In
            </Button>
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-9">
        <CardWrapper>
          <div className="w-full flex justify-center flex-col gap-4">
            <BadgeDemo />
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-6">
        <CardWrapper>
          <div className="w-full flex justify-center flex-col gap-4 items-center">
            <div className="flex gap-2">
              <AvatarDemo2 />
              <AvatarDemo />
            </div>
            <AvatarDemo3 />
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-4">
        <CardWrapper>
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <PopoverDemo />
          </div>
        </CardWrapper>
      </div>
      <div className="relative xl:col-span-5">
        <CardWrapper>
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <StickyMouseDemo />
          </div>
        </CardWrapper>
      </div>
      {/* <div className="relative xl:col-span-12">
        <CardWrapper>
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <PopImagesParagraph />
          </div>
        </CardWrapper>
      </div> */}
    </section>
  );
}
