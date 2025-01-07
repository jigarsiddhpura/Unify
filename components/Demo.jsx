"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import WordRotate from "@/components/ui/word-rotate";
import { Input, Button } from "@nextui-org/react"

export default function Demo() {
    const DemoS3VideoUrl = process.env.UNIFY_VIDEO_URL; 

    return (
        <main className="dark relative overflow-hidden px-4 xl:pl-32 xl:pr-16 flex justify-center items-center">

            <div className="container lg:mx-auto py-12 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center relative z-10">

                    {/* Left Column */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4 ">
                            <span className="text-3xl md:text-6xl font-bold text-gray-400">
                                The future of
                                <WordRotate
                                    className="font-bold text-black dark:text-gray-100"
                                    words={["warm outboud", "pipeline generation", "AI and sales", "go-to-market"]}
                                />
                            </span>
                            <span className="text-lg max-w-xl">
                                Drive pipeline with 10+ intent data sources, AI, and automation. Scale
                                prospecting, personalization, and engagement in one unified workflow.
                            </span>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4 items-center sm:relative lg:left-36 lg:static">
                            <Input
                                type="email"
                                placeholder="What's your work email?"
                                size="lg"
                                className="bg-gray-800/50 border-1 border-white rounded-sm w-80"
                                classNames={{
                                    input: "text-center",
                                    inputWrapper: "text-center"
                                }}
                            />
                            <Button
                                size="lg"
                                className="w-80 lg:w-auto bg-white text-black hover:bg-gray-200 rounded-sm"
                            >
                                Get started
                            </Button>
                        </div>
                        <span className="text-sm text-gray-500">Set up Unify in minutes</span>
                    </div>

                    {/* Right Column */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm hover:border-gray-400">
                        <div className="aspect-video">
                            <video
                                controls
                                className="w-full h-full"  // Better than inline styles
                                playsInline  // Important for mobile devices
                            >
                                <source src={DemoS3VideoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <DotPattern
                width={16}
                height={16}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] ",
                )}
            />
        </main>
    )
}

