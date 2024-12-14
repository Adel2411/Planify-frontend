"use client";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

const words = ["Plan", "Track", "Achieve"];

export function Hero() {
  return (
    <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn("mx-8 md:text-3xl text-2xl font-semibold relative z-20")}
      >
        Effortlessly
        <FlipWords words={words} />
        <br />
        Your Business Goals
      </h1>
      <p className="mx-4 lg:mx-32 text-center mt-2 relative z-20">
        Unlock the power of tailored marketing plans and project management.
        With Planify, turn your ideas into actionable strategies, streamline
        team collaboration, and watch your business thrive.
      </p>

      <Button className="mt-8 z-20" asChild>
        <Link href="/login">Try Now</Link>
      </Button>
    </div>
  );
}
