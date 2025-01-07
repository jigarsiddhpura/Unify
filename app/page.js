import Demo from "@/components/Demo";
import { Footer } from "@/components/Footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SignalsCard } from "@/components/SignalsCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Input, Button } from "@nextui-org/react"
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark bg-[#1d1d1d]">
      <Demo />
      <LogoMarquee />

      <SignalsCard cardName="Signals & Data" title="Act on buyers at the right time" description="Use 10+ data sources to identify when prospects are ready to buy. Get best-in-class 1st and 3rd party signals out of the box." imgPath="/signalsanddata.avif" cardNameBg="linear-gradient(90deg, #fea0cc, #f9ffb5)" />

      <SignalsCard cardName="Plays" title="Build and scale automated Plays" description="Plays are the most powerful canvas for scaling your revenue team's creativity. Craft custom prospecting, enrichment, AI research, and sequencing workflows that run on autopilot." imgPath="/plays.png" cardNameBg="linear-gradient(90deg, #fdffa8, #b2ffed)" />

      <SignalsCard cardName="Sequences" title="Natively engage buyers at scale" description="Reach buyers where they are with multi-touch Sequences. Send personalized messages directly through Unify, backed by managed deliverability to boost pipeline and drive replies." imgPath="/sequences.png" cardNameBg="linear-gradient(90deg, #b8b6ff, #84d4ee)" />

      <SignalsCard cardName="AI Agents" title="AI Agents created to prospect" description="Leverage our Agent to scale account research and 1:1 personalized messaging. Use AI to scrape websites, Google, pull CRM data, and more." imgPath="/ai-agents.avif" cardNameBg="linear-gradient(90deg, #b8b6ff, #84d4ee)" />

      <SignalsCard cardName="Analytics & Dashboards" title="End-to-end reporting and analytics" description="Quickly identify and double down on your most effective plays. Attribute pipeline and revenue to plays out-of-the-box." imgPath="/analytics.png" cardNameBg="linear-gradient(90deg, #e6cdf9, #ffd2b1)" />

      <TestimonialCarousel />

      <section className="flex flex-col h-96 text-center space-y-6 mx-12 xl:mx-96 justify-center items-center tracking-wide">
        <h3 className="font-bold text-3xl">Connect with buyers when it matters</h3>
        <p className="text-gray-500 font-semibold">High growth companies like Justworks, Lattice, Guru, and OpenPhone power go-to-market with Unify.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="What's your work email?"
            size="lg"
            className="bg-gray-800/50 border-1 border-white rounded-sm w-80"
            classNames={{
              input: "text-center lg:text-left",
              // inputWrapper: "text-center",
              // placeholder: "text-center placeholder:text-center"
            }}
          />
          <Button
            size="lg"
            className="md:w-auto bg-white text-black hover:bg-gray-200 rounded-sm"
          >
            Get started
          </Button>
        </div>
        <span className="text-sm text-gray-500">Set up Unify in minutes</span>
      </section>

      <Footer />
    </main>

  );
}
