import { Icons } from "@/components/site-specific/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardSection,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CardDemo() {
  return (
    <Card>
      <CardContent shadow>
        <Image
          src="https://images.unsplash.com/photo-1564463836146-4e30522c2984"
          height={160}
          width={300}
          alt="Norway"
          className="w-full rounded-md"
        />
      </CardContent>
      <CardContent className="w-full pt-0">
        <h1 className="text-lg font-semibold">Alexa Banter</h1>
        <p className="text-sm">
          CEO of Flex Entertainment, a record label that has signed artists like
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          variant="primary"
          href="#"
          rightSection={<ArrowRight size={16} />}
        >
          Details
        </Button>
        <div className="flex items-center space-x-2 text-2xl mt-4">
          <Link href="#">
            <FaLinkedin />
          </Link>
          <Link href="#">
            <FaTwitter />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
