import Link from 'next/link'
import { Twitter, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
    Product: ['Signals', 'Plays', 'Sequences', 'AI Agents', 'Analytics'],
    Company: ['Customers', 'Pricing', 'Careers', 'About', 'Security'],
    Resources: ['Use Cases', 'Product Tour', 'Support', 'Blog'],
    Comparisons: ['Clay', 'Warmly', 'Koala', 'Common Room', 'RB2B'],
    'Free Tools': ['Email Coach', 'Sales Call Notes']
}

const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/unify' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/unify' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/unify' }
]

export function Footer() {
    return (
        <footer className="bg-[#1d1d1d] text-gray-400 py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-gray-300 font-medium mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="hover:text-white transition-colors duration-200"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-800 mb-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span>Unify © 2025</span>
                        <Link href="#" className="hover:text-white transition-colors duration-200">
                            Terms
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors duration-200">
                            Privacy
                        </Link>
                        <span>Powered by Clearbit and 6sense</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

