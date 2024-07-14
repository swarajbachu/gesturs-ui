import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardSection,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CardDemo() {
  return (
    <Card>
      <CardSection>
        <Image
          src="https://images.unsplash.com/photo-1548501495-34f5ec33c530"
          height={160}
          width={300}
          alt="Norway"
        />
      </CardSection>
      <CardContent className="w-full">
        <h1 className="text-lg font-semibold">Ladakh Bike ride India</h1>
        <p className="text-sm">
          The Ladakh Bike Ride is one of the most exciting and adventurous bike
          rides in India. The bike ride takes you through the beautiful
          landscapes of Ladakh.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button rightSection={<ArrowRight size={16} />} href="#">
          Details
        </Button>
        <h4 className="text-lg font-semibold">14 July 2024</h4>
      </CardFooter>
    </Card>
  );
}
