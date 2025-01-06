import Demo from "@/components/Demo";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SignalsCard } from "@/components/SignalsCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark bg-[#1d1d1d]">
      <Demo/>
      <LogoMarquee/>

      <SignalsCard cardName="Signals & Data" title="Act on buyers at the right time" description="Use 10+ data sources to identify when prospects are ready to buy. Get best-in-class 1st and 3rd party signals out of the box." imgPath="/signalsanddata.avif" cardNameBg="linear-gradient(90deg, #fea0cc, #f9ffb5)"/>

      <SignalsCard cardName="Plays" title="Build and scale automated Plays" description="Plays are the most powerful canvas for scaling your revenue team's creativity. Craft custom prospecting, enrichment, AI research, and sequencing workflows that run on autopilot." imgPath="/plays.png" cardNameBg="linear-gradient(90deg, #fdffa8, #b2ffed)"/>

      <SignalsCard cardName="Sequences" title="Natively engage buyers at scale" description="Reach buyers where they are with multi-touch Sequences. Send personalized messages directly through Unify, backed by managed deliverability to boost pipeline and drive replies." imgPath="/sequences.png" cardNameBg="linear-gradient(90deg, #b8b6ff, #84d4ee)"/>
      
      <SignalsCard cardName="AI Agents" title="AI Agents created to prospect" description="Leverage our Agent to scale account research and 1:1 personalized messaging. Use AI to scrape websites, Google, pull CRM data, and more." imgPath="/ai-agents.avif" cardNameBg="linear-gradient(90deg, #b8b6ff, #84d4ee)"/>

      <SignalsCard cardName="Analytics & Dashboards" title="End-to-end reporting and analytics" description="Quickly identify and double down on your most effective plays. Attribute pipeline and revenue to plays out-of-the-box." imgPath="/analytics.png" cardNameBg="linear-gradient(90deg, #e6cdf9, #ffd2b1)"/>

      <TestimonialCarousel/>
    </main>

  );
}
