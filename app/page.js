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

      <SignalsCard cardName="Workflow Automation" title="Streamline and scale your operations" description="Harness powerful tools to automate prospecting, data enrichment, and lead management. Transform repetitive tasks into seamless workflows." imgPath="/attio.avif" cardNameBg="linear-gradient(90deg, #fdffa8, #b2ffed)" />

      <SignalsCard cardName="Engagement Hub" title="Engage buyers with precision" description="Leverage multi-channel engagement to connect with your audience. Deliver personalized experiences and maximize conversion rates." imgPath="/agewise.webp" cardNameBg="linear-gradient(90deg, #b8b6ff, #84d4ee)" />

      <SignalsCard cardName="AI Research Assistants" title="AI-powered tools for actionable insights" description="Deploy AI-driven tools to gather deep insights, conduct personalized research, and refine your outreach strategies at scale." imgPath="/appointwise2.avif" cardNameBg="linear-gradient(90deg, #b8b6ff, #84d4ee)" />

      <SignalsCard cardName="Performance Metrics" title="Visualize success and optimize outcomes" description="Track key metrics and refine your strategies. Attribute success to specific workflows and amplify what works best." imgPath="/invest.png" cardNameBg="linear-gradient(90deg, #e6cdf9, #ffd2b1)" />

      <SignalsCard cardName="Market Insights" title="Act on trends before your competitors" description="Utilize 10+ intelligence sources to uncover buyer trends and predict demand shifts. Access real-time data to stay ahead." imgPath="/competition.webp" cardNameBg="linear-gradient(90deg, #fea0cc, #f9ffb5)" />

      <TestimonialCarousel />

      <section className="flex flex-col h-96 text-center space-y-6 mx-12 xl:mx-96 justify-center items-center tracking-wide">
        <h3 className="font-bold text-3xl">Connect with buyers when it counts</h3>
        <p className="text-gray-500 font-semibold">Industry leaders like Notion, Figma, Airtable, and Stripe rely on us to transform their go-to-market strategies.</p>
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
        <span className="text-sm text-gray-500">Set up Nova in minutes</span>
      </section>

      <Footer />
    </main>

  );
}
