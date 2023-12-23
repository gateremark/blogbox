"use client";

import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { Toaster, toast } from "sonner";

const Home: React.FC = () => {
    const { data: session } = useSession();
    const { theme } = useTheme();
    toast.info("In Development! 🚀");

    return (
        <main className="relative h-fit pt-4 pb-6 md:px-8 px-4 flex flex-col items-center bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] dark:from-[#000000] dark:to-[#121212]">
            <Toaster richColors position="top-right" closeButton />
            <header className=" w-full h-[75px] flex items-center ">
                <Nav />
            </header>
            <div className="bg___svg h-full w-full absolute z-20 dark:opacity-5"></div>
            <div className="flex flex-col items-center justify-center text-center pt-8 pb-6 max-w-3xl space-y-4 z-30">
                <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold ">
                    ...thoughts, stories, and creativity converge seamlessly.
                    Welcome to <span className=" underline ">BlogBox</span>
                </h1>
                <h2 className="text-base sm:text-xl md:text-2xl font-medium">
                    The unified space where your ideas flow <br /> effortlessly
                    onto the digital canvas.
                </h2>
                {session ? (
                    <Link
                        href="/blogs"
                        className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]"
                    >
                        Go to Blogs <FaArrowRight />
                    </Link>
                ) : (
                    <Link
                        href="/join"
                        className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]"
                    >
                        Join BlogBox <FaArrowRight />
                    </Link>
                )}

                {theme === "dark" ? (
                    <Image
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1703279901/new_portfolio/reading_no5et4.webp"
                        height={500}
                        width={500}
                        alt="A person reading"
                        className="w-[500px] h-auto pt-10"
                    />
                ) : (
                    <Image
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1701293531/new_portfolio/kqvhmllwvodva5pjr6fs.webp"
                        height={500}
                        width={500}
                        alt="A person reading"
                        className="w-[500px] h-auto pt-10"
                    />
                )}
            </div>
            <Footer />
        </main>
    );
};

export default Home;
