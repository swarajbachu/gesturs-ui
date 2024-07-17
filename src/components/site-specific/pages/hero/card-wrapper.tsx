import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function CardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="w-full h-full">
      <CardContent className="grid h-full w-full justify-items-center overflow-hidden place-items-center p-6 py-8 sm:p-8 lg:p-12">
        {children}
      </CardContent>
    </Card>
  );
}
