'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

const logos = [
    { name: 'Abacum', url: 'https://www.abacum.io/', image: '/logos/abacum.svg' },
    { name: 'Airbyte', url: 'https://www.hightouch.com/', image: '/logos/airbyte.avif' },
    { name: 'Footprint', url: 'https://onefootprint.com/', image: '/logos/footprint.svg' },
    { name: 'Guru', url: 'https://www.hightouch.com/', image: '/logos/guru.svg' },
    { name: 'High Touch', url: 'https://www.hightouch.com/', image: '/logos/hightouch.png' },
    { name: 'HyperComply', url: 'https://www.hypercomply.com/', image: '/logos/hypercomply.svg' },
    { name: 'Justworks', url: 'https://www.justworks.com/', image: '/logos/justworks.svg' },
    { name: 'Lattice', url: 'https://lattice.com/', image: '/logos/lattice.avif' },
    { name: 'Open house', url: 'https://www.hightouch.com/', image: '/logos/openhouse.svg' },
    { name: 'Sofi', url: 'https://www.hightouch.com/', image: '/logos/sofi.png' },
    { name: 'Speecify', url: 'https://www.hightouch.com/', image: '/logos/speechify.svg' },
    { name: 'Spot ai', url: 'https://www.hightouch.com/', image: '/logos/spotai.svg' },
    { name: 'Vantage', url: 'https://www.vantage.sh/', image: '/logos/vantage.svg' },
]

export function LogoMarquee() {
    return (
        <section className="w-full py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-2xl md:text-3xl font-medium text-white mb-12">
                    Trusted by hundreds of the world&apos;s most innovative sales, marketing and growth teams.
                </h2>

                <div className="relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l to-transparent z-10" />

                    {/* Marquee Container */}
                    <div className="relative w-full overflow-hidden">
                        <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
                            {/* Original content */}
                            {logos.map((logo, i) => (
                                <Link
                                    key={`${logo.name}-${i}`}
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 transition-opacity hover:opacity-80 inline-block"
                                >
                                    <Image
                                        src={logo.image}
                                        alt={`${logo.name} logo`}
                                        width={120}
                                        height={40}
                                        className="h-8 w-auto mr-16 object-contain brightness-0 invert opacity-70"
                                    />
                                </Link>
                            ))}

                            {/* Duplicate content for seamless animation */}
                            {logos.map((logo, i) => (
                                <Link
                                    key={`duplicate-${logo.name}-${i}`}
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 transition-opacity hover:opacity-80 inline-block"
                                >
                                    <Image
                                        src={logo.image}
                                        alt={`${logo.name} logo`}
                                        width={120}
                                        height={40}
                                        className="h-8 w-auto mr-16 object-contain brightness-0 invert opacity-70"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                {/* G2 Reviews */}
                <div className="flex items-center justify-center gap-4 mt-12">
                    <span className="text-gray-400">G2</span>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 mr-1 text-[#8b8b8b] fill-[#8b8b8b]" />
                        ))}
                    </div>
                    <Link
                        href="#"
                        className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        See reviews
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

