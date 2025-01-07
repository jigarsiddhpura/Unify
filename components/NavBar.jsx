"use client";

import { useEffect, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    NavbarMenu, NavbarMenuToggle, NavbarMenuItem
} from "@nextui-org/react";
import Image from "next/image";
import { FaFire, FaProjectDiagram, FaPaperPlane, FaRobot, FaChartBar } from 'react-icons/fa';

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
    const color = fill;

    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g transform="translate(3.5 2)">
                <path
                    d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(3.85 0.75)"
                />
                <path
                    d="M.5,0V2.221"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(7.91 12.156)"
                />
                <path
                    d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(0.75 6.824)"
                />
            </g>
        </svg>
    );
};

export const Activity = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            >
                <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
                <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
                <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
            </g>
        </svg>
    );
};

export const Flash = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Server = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const TagUser = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Scale = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M18 10V6h-4M6 14v4h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export default function NavBar() {
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detect scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true); // Scrolling down
            } else if (currentScrollY < 100) {
                setIsHidden(false); // Scrolling up
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const [openDropdownId, setOpenDropdownId] = useState(null); // Tracks which dropdown is open

    const handleOpenChange = (id, isOpen) => {
        setOpenDropdownId(isOpen ? id : null); // Open only the current dropdown
    };

    const [isOpenNavbarMenu, setIsOpenNavbarMenu] = useState(false);

    const [openNavbarMenuId, setOpenNavbarMenuId] = useState(null); // Tracks which dropdown is open

    const handleOpenNavbarMenu = (id, isOpen) => {
        setIsOpenNavbarMenu(isOpen);
        setOpenNavbarMenuId(isOpen ? id : null); // Open only the current dropdown
    };




    return (
        <Navbar className="dark py-2 w-full" isBlurred="false">
            <NavbarBrand className="relative lg:right-12 xl:right-24">
                <Image src="/logo.svg" alt="Logo" width="90" height="90" ></Image>
            </NavbarBrand>

            <NavbarContent className="hidden lg:flex  lg:gap-3" justify="center">

                <div
                    key={1}
                    onMouseEnter={() => handleOpenChange(1, true)}
                    onMouseLeave={() => handleOpenChange(1, false)}
                    className="relative" // To ensure proper hover containment
                >
                    <Dropdown
                        className="bg-[#222222] border-2 border-[#333333] relative left-96"
                        isOpen={openDropdownId === 1}
                        onOpenChange={(isOpen) => handleOpenChange(1, isOpen)}
                    >
                        {/* <NavbarItem> */}
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="xl:p-4 bg-transparent hover:bg-[#333333]"
                                endContent={
                                    <span className={`transition-transform transform ${openDropdownId === 1 ? "rotate-180" : "rotate-0"}`}>
                                        {icons.chevron}
                                    </span>
                                }
                                radius="sm"
                            >
                                Products
                            </Button>
                        </DropdownTrigger>
                        {/* </NavbarItem> */}
                        <DropdownMenu aria-label="Products" className="deactivate-hover">
                            <DropdownItem key="products" className="w-auto min-w-[200px] max-w-[800px] ">
                                <h4 className="pl-4">Products</h4>
                                <div className="dark grid grid-cols-3 gap-6">
                                    <a
                                        href="/signals"
                                        className="flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-[#333333]"
                                    >
                                        <div className="flex items-center justify-center w-20 h-10 rounded-full bg-amber-900/20">
                                            <FaFire className="w-5 h-5 text-amber-700" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-medium">Signals</span>
                                            <p className="text-sm text-gray-500">
                                                Use 10+ signals to capture buyer intent and build Audiences
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="/plays"
                                        className="flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-[#333333]"
                                    >
                                        <div className="flex items-center justify-center w-20 h-10 rounded-full bg-teal-500/20">
                                            <FaProjectDiagram className="w-5 h-5 text-teal-700" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-medium">Plays</span>
                                            <p className="text-sm text-gray-500">
                                                One workflow to prospect, enrich, and sequence on autopilot
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="/sequences"
                                        className="flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-[#333333]"
                                    >
                                        <div className="flex items-center justify-center w-20 h-10 rounded-full bg-purple-500/20">
                                            <FaPaperPlane className="w-5 h-5 text-purple-700" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-medium">
                                                Sequences
                                            </span>
                                            <p className="text-sm text-gray-500">
                                                Engage buyers with multi-touch outbound and managed deliverability
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="/ai"
                                        className="flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-[#333333]"
                                    >
                                        <div className="flex items-center justify-center w-20 h-10 rounded-full bg-blue-500/20">
                                            <FaRobot className="w-5 h-5 text-blue-700" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-medium">
                                                AI Agents
                                            </span>
                                            <p className="text-sm text-gray-500">
                                                Use AI to research leads and personalize messaging at scale
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="/analytics"
                                        className="flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-[#333333]"
                                    >
                                        <div className="flex items-center justify-center w-20 h-10 rounded-full bg-pink-500/20">
                                            <FaChartBar className="w-5 h-5 text-pink-700" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-medium">
                                                Analytics & Dashboards
                                            </span>
                                            <p className="text-sm text-gray-500">
                                                Understand Play performance, pipeline generation, email metrics,
                                                and more
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div
                    key={2}
                    onMouseEnter={() => handleOpenChange(2, true)}
                    onMouseLeave={() => handleOpenChange(2, false)}
                    className="relative" // To ensure proper hover containment
                >
                    <Dropdown
                        className="bg-[#222222] border-2 border-[#333333]"
                        isOpen={openDropdownId === 2}
                        onOpenChange={(isOpen) => handleOpenChange(2, isOpen)}
                    >
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="xl:p-4 bg-transparent hover:bg-[#333333]"
                                endContent={
                                    <span className={`transition-transform transform ${openDropdownId === 2 ? "rotate-180" : "rotate-0"}`}>
                                        {icons.chevron}
                                    </span>
                                }
                                radius="sm"
                            >
                                Use Cases
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example" className="dark">
                            <DropdownItem key="header" className="text-gray-400 deactivate-hover">
                                Use Cases
                            </DropdownItem>
                            <DropdownItem key="new" className="py-3 pr-4 mb-1">
                                Intent based triggers
                            </DropdownItem>
                            <DropdownItem key="copy" className="py-3 pr-4 mb-1">
                                Third party signals
                            </DropdownItem>
                            <DropdownItem key="edit" className="py-3 pr-4 mb-1">
                                All use cases
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div
                    key={3}
                    onMouseEnter={() => handleOpenChange(3, true)}
                    onMouseLeave={() => handleOpenChange(3, false)}
                    className="relative" // To ensure proper hover containment
                >
                    <Dropdown
                        className="bg-[#222222] border-2 border-[#333333]"
                        isOpen={openDropdownId === 3}
                        onOpenChange={(isOpen) => handleOpenChange(3, isOpen)}
                    >
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-4 bg-transparent hover:bg-[#333333]"
                                endContent={
                                    <span className={`transition-transform transform ${openDropdownId === 3 ? "rotate-180" : "rotate-0"}`}>
                                        {icons.chevron}
                                    </span>
                                }
                                radius="sm"
                            >
                                Company
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example" className="dark">
                            <DropdownItem key="header" className="text-gray-400 deactivate-hover">Company</DropdownItem>
                            <DropdownItem key="new" className="py-3 pr-4 mb-1">Customer</DropdownItem>
                            <DropdownItem key="copy" className="py-3 pr-4 mb-1">About</DropdownItem>
                            <DropdownItem key="careers" className="py-3 pr-4 mb-1">Careers</DropdownItem>
                            <DropdownItem key="partner" className="py-3 pr-4 mb-1">Partner</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div
                    key={4}
                    onMouseEnter={() => handleOpenChange(4, true)}
                    onMouseLeave={() => handleOpenChange(4, false)}
                    className="relative" // To ensure proper hover containment
                >
                    <Dropdown
                        className="bg-[#222222] border-2 border-[#333333]"
                        isOpen={openDropdownId === 4}
                        onOpenChange={(isOpen) => handleOpenChange(4, isOpen)}
                    >
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-4 bg-transparent hover:bg-[#333333]"
                                endContent={
                                    <span className={`transition-transform transform ${openDropdownId === 4 ? "rotate-180" : "rotate-0"}`}>
                                        {icons.chevron}
                                    </span>
                                }
                                radius="sm"
                            >
                                Resources
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example" className="dark">
                            <DropdownItem key="header" className="text-gray-400 deactivate-hover">Resources</DropdownItem>
                            <DropdownItem key="new" className="py-3 pr-4 mb-1">Support</DropdownItem>
                            <DropdownItem key="copy" className="py-3 pr-4 mb-1">Blog</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <NavbarItem>
                    <Link color="foreground" href="#">
                        Pricing
                    </Link>
                </NavbarItem>

                <NavbarItem
                    className={`relative left-6 transition-transform duration-500 ${isHidden ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                        }`}
                >
                    <Link color="foreground" href="#">
                        Product tour
                    </Link>
                </NavbarItem>

            </NavbarContent>

            <NavbarMenuToggle className="lg:hidden" />
            <NavbarMenu className="dark block lg:hidden bg-transparent space-y-4 py-4 px-8 text-xs">
                <NavbarMenuItem className="border-b-2 border-[#3e3e3e] pb-2">
                    <div
                        key={5}
                        onPress={() => handleOpenNavbarMenu(5, !isOpenNavbarMenu)}
                        className="relative" // To ensure proper hover containment
                    >
                        <div className="flex justify-between"
                        >
                            <p>Products</p>
                            <span className={`mt-2 transition-transform transform ${openNavbarMenuId === 5 ? "rotate-180" : "rotate-0"}`}>
                                {icons.chevron}
                            </span>
                        </div>
                        <div className={`flex-col ${openNavbarMenuId === 5 ? "flex" : "hidden"}`}>
                            {['Signals', 'Plays', 'Sequences', 'AI Agents', 'Analytics & Dashboards'].map((item) => (
                                <span key={item} className="text-xs md:text-sm py-3">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem className="border-b-2 border-[#3e3e3e] pb-2">
                    <div
                        key={6}
                        onPress={() => handleOpenNavbarMenu(6, !isOpenNavbarMenu)}
                        className="relative" // To ensure proper hover containment
                    >
                        <div className="flex justify-between"
                        >
                            <p>Use Cases</p>
                            <span className={`mt-2 transition-transform transform ${openNavbarMenuId === 6 ? "rotate-180" : "rotate-0"}`}>
                                {icons.chevron}
                            </span>
                        </div>
                        <div className={`flex-col ${openNavbarMenuId === 6 ? "flex" : "hidden"}`}>
                            {['Intent based triggers', 'Third Party Signals', 'All use cases'].map((item) => (
                                <span key={item} className="text-xs md:text-sm py-3">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem className="border-b-2 border-[#3e3e3e] pb-2">
                    <div
                        key={7}
                        onPress={() => handleOpenNavbarMenu(7, !isOpenNavbarMenu)}
                        className="relative" // To ensure proper hover containment
                    >
                        <div className="flex justify-between"
                        >
                            <p>Company</p>
                            <span className={`mt-2 transition-transform transform ${openNavbarMenuId === 7 ? "rotate-180" : "rotate-0"}`}>
                                {icons.chevron}
                            </span>
                        </div>
                        <div className={`flex-col ${openNavbarMenuId === 7 ? "flex" : "hidden"}`}>
                            {['Customers', 'About', 'Careers'].map((item) => (
                                <span key={item} className="text-xs md:text-sm py-3">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem className="border-b-2 border-[#3e3e3e] pb-2">
                    <div
                        key={8}
                        onPress={() => handleOpenNavbarMenu(8, !isOpenNavbarMenu)}
                        className="relative" // To ensure proper hover containment
                    >
                        <div className="flex justify-between"
                        >
                            <p>Resources</p>
                            <span className={`mt-2 transition-transform transform ${openNavbarMenuId === 8 ? "rotate-180" : "rotate-0"}`}>
                                {icons.chevron}
                            </span>
                        </div>
                        <div className={`flex-col ${openNavbarMenuId === 8 ? "flex" : "hidden"}`}>
                            {['Support', 'Blog'].map((item) => (
                                <span key={item} className="text-xs md:text-sm py-3">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <a href="/pricing">Pricing</a>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <a href="/product-tour">Product Tour</a>
                </NavbarMenuItem>
            </NavbarMenu>

            <NavbarContent justify="end" className="hidden lg:flex relative lg:left-12 xl:left-28">
                <NavbarItem
                    className={`hidden lg:flex transition-transform duration-500 easeInOut ${isHidden
                        ? "opacity-0 translate-y-5 pointer-events-none"
                        : "opacity-100 translate-y-0"
                        }`}
                    style={{
                        position: isHidden ? "absolute" : "relative",
                    }}
                >
                    <Button radius="sm" variant="ghost">
                        Sign in
                    </Button>
                </NavbarItem>

                {/* Show 'Explore Products' when hidden */}
                <NavbarItem
                    className={`hidden lg:flex transition-transform duration-1000 easeInOut ${isHidden
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5 pointer-events-none"
                        }`}
                    style={{
                        position: isHidden ? "relative" : "absolute",
                    }}
                >
                    <Button radius="sm" variant="ghost">
                        Explore Products
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button radius="sm" variant="solid" className="light">Get Started</Button>
                </NavbarItem>
            </NavbarContent>



        </Navbar>
    );
}
