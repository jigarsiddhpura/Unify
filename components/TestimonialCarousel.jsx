'use client'

import { useState } from 'react'
import { Card, Button, Avatar, AvatarIcon } from '@nextui-org/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

// Testimonial data
const testimonials = [
    {
        company: 'Justworks',
        logo: '/logos/justworks.svg',
        title: 'Justworks Sees 6.8X ROI in the First 5 Months With Unify',
        author: {
            name: 'Peter Nguyen',
            role: 'Senior Manager, Growth Marketing',
        }
    },
    {
        company: 'Vantage',
        logo: '/logos/vantage.svg',
        title: 'Vantage Increases Meetings Booked with Enterprise Accounts by 20% Using Unify',
        author: {
            name: 'Carver Marshall',
            role: 'Director of Business Development',
        }
    },
    // Additional testimonials to demonstrate scrolling
    {
        company: 'Lattice',
        logo: '/logos/lattice.avif',
        title: 'Lattice Achieves 40% Increase in Sales Productivity with Unify',
        author: {
            name: 'Sarah Chen',
            role: 'Head of Revenue Operations',
        }
    },
    {
        company: 'Abacum',
        logo: '/logos/abacum.svg',
        title: 'How Abacum Streamlined Their Sales Process Using Unify',
        author: {
            name: 'Miguel Rodriguez',
            role: 'Sales Operations Manager',
        }
    },
    {
        company: 'HyperComply',
        logo: '/logos/hypercomply.svg',
        title: 'HyperComply Reduces Sales Cycle by 30% with Unify Integration',
        author: {
            name: 'Lisa Park',
            role: 'Director of Sales',
        }
    },
    {
        company: 'Footprint',
        logo: '/logos/footprint.svg',
        title: 'Footprint Scales Account Management Operations with Unify',
        author: {
            name: 'James Wilson',
            role: 'Customer Success Director',
        }
    },
    {
        company: 'Speechify',
        logo: '/logos/speechify.svg',
        title: 'Speechify Boosts Customer Engagement Metrics Using Unify',
        author: {
            name: 'Emma Thompson',
            role: 'Growth Lead',
        }
    },
]

export function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const canScrollLeft = currentIndex > 0
    const canScrollRight = currentIndex < testimonials.length - 3

    const handlePrevious = () => {
        if (canScrollLeft) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (canScrollRight) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <section className="dark w-full py-16 px-4 mt-40 mb-20 bg-[#1d1d1d]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl lg:text-5xl font-medium text-white">
                            What our customers are saying
                        </h2>
                        <p className="text-gray-400 text-sm lg:text-lg">
                            Go-to-market leaders at high growth companies rely on Unify to hit revenue goals
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            isIconOnly
                            variant="flat"
                            className="bg-gray-800/50 text-white"
                            isDisabled={!canScrollLeft}
                            onClick={handlePrevious}
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            isIconOnly
                            variant="flat"
                            className="bg-gray-800/50 text-white"
                            isDisabled={!canScrollRight}
                            onClick={handleNext}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (85)}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="flex-none w-5/6 sm:w- md:w-[calc(33.333%-20px)] bg-[#222222] backdrop-blur-sm border-2 border-gray-500"
                            >
                                <div className="py-8 px-4 space-y-36">
                                    <div className="space-y-8">
                                        <Image
                                            src={testimonial.logo}
                                            alt={`${testimonial.company} logo`}
                                            width={120}
                                            height={40}
                                            className="h-8 w-auto object-contain brightness-0 invert"
                                        />

                                        <h3 className="text-xl text-white font-medium leading-tight">
                                            {testimonial.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Avatar
                                            classNames={{
                                                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                                icon: "text-black/80",
                                            }}
                                            icon={<AvatarIcon />}
                                        />
                                        <div>
                                            <div className="text-white font-medium">
                                                {testimonial.author.name}
                                            </div>
                                            <div className="text-gray-400 text-sm">
                                                {testimonial.author.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

