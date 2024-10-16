import Encryption from "@/Components/main/Encryption";
import Hero from "@/Components/main/Hero";
import Skills from "@/Components/main/Skills";
import { h1, main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
<main className="h-full w-full">
  <div className="flex flex-col gap-20">
    <Hero />
    <Skills/>
    <Encryption/>
  </div>
</main>
  );
}
