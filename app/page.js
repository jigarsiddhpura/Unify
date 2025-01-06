import Demo from "@/components/Demo";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SignalsCard } from "@/components/SignalsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark">
      {/* <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1> */}
      <Demo/>
      <LogoMarquee/>
      <SignalsCard/>
    </main>
  );
}
