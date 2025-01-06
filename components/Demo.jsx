"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import WordRotate from "@/components/ui/word-rotate";

import { Input, Button } from "@nextui-org/react"
import Image from 'next/image';
// import { useState } from 'react';
import { Play } from 'lucide-react'
import Video from 'next-video';
import DemoVideo from '@/videos/unify-demo.mp4';

export default function Demo() {
    // const [isPlaying, setIsPlaying] = useState(false);
    return (
        <main className="dark relative overflow-hidden pl-32 pr-16">
            {/* Dot pattern background */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}

            <div className="container mx-auto px-4 py-12 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-400">
                                The future of
                                <WordRotate
                                    className="text-5xl font-bold text-black dark:text-gray-100"
                                    words={["warm outboud", "pipeline generation", "AI and sales", "go-to-market"]}
                                />
                            </h1>
                            <p className="text-lg max-w-xl">
                                Drive pipeline with 10+ intent data sources, AI, and automation. Scale
                                prospecting, personalization, and engagement in one unified workflow.
                            </p>
                        </div>

                        <div className="max-w flex space-x-4">
                            <Input
                                type="email"
                                placeholder="What's your work email?"
                                size="lg"
                                className="bg-gray-800/50 border-1 border-white rounded-sm w-80"
                            />
                            <Button
                                size="lg"
                                className="md:w-auto bg-white text-black hover:bg-gray-200 rounded-sm"
                            >
                                Get started
                            </Button>
                        </div>
                        <span className="text-sm text-gray-500">Set up Unify in minutes</span>
                    </div>

                    {/* Right Column */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm hover:border-gray-400">
                        <div className="aspect-video">
                            <Video src={DemoVideo} style={{ "height": "24rem" }} />;
                        </div>
                        {/* <div className="absolute bottom-4 left-4 flex items-center gap-3">
                            <Image src="/unify-preview"></Image>
                            <Button
                                isIconOnly
                                className="bg-white text-black rounded-full w-10 h-10"
                                aria-label="Play demo"
                            >
                                <Play className="w-4 h-4" />
                            </Button>
                            <div>
                                <p className="text-white font-medium">Watch Demo</p>
                                <p className="text-sm text-gray-400">1 min</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
        </main>
    )
}

