import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const features = [
  "Get 5 GB of storage",
  "300 uploads per month",
  "500 downloads per month",
  "Feedback from users",
  "30 days of free support",
  "Unlimited Access",
];

export default function CardDemo() {
  return (
    <Card className="w-fit">
      <CardContent className="space-y-5 text-center">
        <h4 className="font-bold">Starter Plan</h4>
        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-6xl">
          <span className="mt-2 text-3xl">$</span>29
          <span className="self-end text-4xl">/mo</span>
        </h1>
        <hr className="border border-zinc-600" />
      </CardContent>
      <CardContent className="w-full pt-0 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center space-x-2">
            <FaCircleCheck className="text-2xl" />
            <p>{feature}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          variant="primary"
          href="#"
          fullWidth
          rightSection={<ArrowRight size={16} />}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
