"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
    Card,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Chip,
} from "@nextui-org/react"
import { ArrowRight, Globe, Zap, Crown, UserPlus } from 'lucide-react'
import Image from "next/image"

export function SignalsCard({ cardName, title, description, imgPath, cardNameBg }) {
    return (
        <Card className="dark bg-[#222222] backdrop-blur-xl border border-white/10 my-16 mx-4 lg:mx-28 py-12 px-6 lg:pl-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div
                            className="bg-clip-text text-transparent text-lg lg:font-medium"
                            style={{ backgroundImage: cardNameBg }}
                        >
                            {cardName}
                        </div>

                        <h2 className="text-2xl lg:text-4xl font-semibold text-white">
                            {title}
                        </h2>
                    </div>
                    <p className="text-base lg:text-medium max-w-[520px]">
                        {description}
                    </p>
                    <Button
                        endContent={<ArrowRight className="w-4 h-4" />}
                        className="bg-white text-black p-4 hover:bg-white/90"
                        variant="flat"
                        radius="sm"
                    >
                        Learn more
                    </Button>
                </div>

                {/* Right Column */}
                <div className="">
                    <Image src={imgPath} width={600} height={600} alt="signals and data"></Image>
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            "[mask-image:linear-gradient(to_left,white,transparent,transparent)] ",
                        )}
                    />
                </div>
            </div>
        </Card>
    )
}

