import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function CardDemo() {
  return (
    <Card>
      <CardHeader className="py-4">
        <h2 className="text-lg font-semibold">Ladakh Trip Sale</h2>
      </CardHeader>
      <CardContent className="w-full space-y-3">
        <h1 className="text-lg font-semibold">Ladakh Bike ride India</h1>
        <p className="text-sm">
          The Ladakh Bike Ride is one of the most exciting and adventurous bike
          rides in India. The bike ride takes you through the beautiful
          landscapes of Ladakh.
        </p>
      </CardContent>
      <CardFooter>
        <Button fullWidth>Book Now</Button>
      </CardFooter>
    </Card>
  );
}
