import Hero from "@/Components/main/Hero";
import { h1, main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
<main className="h-full w-full">
  <div className="flex flex-col h-[850px] gap-20">
    <h1>Madharchod</h1>
    <Hero />
  </div>
</main>
  );
}
