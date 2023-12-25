"use client";

import Link from "next/link";
import { MdHome } from "react-icons/md";
import Image from "next/image";
import { LuLogOut, LuPencilLine } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import BlogCard from "@/app/components/BlogCard";

const Blogs = () => {
    const { data: session } = useSession();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const id = uuidv4();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const pushToWrite = () => {
        if (
            navigator.userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|OperaMini|IEMobile/i
            )
        ) {
            window.alert(
                "Sorry, the write feature is not available on mobile devices."
            );
        } else {
            router.push(`/write/${id}`);
        }
    };

    // console.log("Agent:", navigator.userAgent.match);
    return (
        <div className="relative h-screen pt-5 pb-6 md:px-8 px-4 flex flex-col items-center bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] gap-2 dark:from-[#000000] dark:to-[#121212]">
            <header className="flex w-full items-center gap-2">
                <nav className=" flex justify-between items-center w-full z-50">
                    {theme === "light" ? (
                        <>
                            <Image
                                src="https://res.cloudinary.com/dvuazircp/image/upload/v1699598453/new_portfolio/blogbox2_sftlp6.webp"
                                priority={true}
                                width={500}
                                height={500}
                                alt="blogbox logo"
                                className="w-60 h-auto hidden md:block "
                            />
                            <Image
                                src="https://res.cloudinary.com/dvuazircp/image/upload/v1699598449/new_portfolio/blogbox_gibi3k.webp"
                                priority={true}
                                width={592}
                                height={494}
                                alt="blogbox logo"
                                className="w-10 sm:w-20 h-auto md:hidden"
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                src="https://res.cloudinary.com/dvuazircp/image/upload/v1703279388/new_portfolio/blogwhite_sopfqk.webp"
                                priority={true}
                                width={500}
                                height={500}
                                alt="blogbox logo"
                                className="w-60 h-auto hidden md:block "
                            />
                            <Image
                                src="https://res.cloudinary.com/dvuazircp/image/upload/v1703279387/new_portfolio/blog2white_sqtpbi.webp"
                                priority={true}
                                width={592}
                                height={494}
                                alt="blogbox logo"
                                className="w-10 sm:w-20 h-auto md:hidden"
                            />
                        </>
                    )}
                    <div className="relative">
                        <div className="block md:hidden">
                            {!isOpen && (
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center justify-center px-3 py-2 border rounded text-[#000000] border-[#000000] hover:bg-[#cacaca] hover:border-[#8b8181] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]"
                                >
                                    <RiMenu2Fill className="h-6 w-6 " />
                                </button>
                            )}
                        </div>
                        <div
                            className={`${
                                isOpen ? "block" : "hidden"
                            } w-60 block absolute flex-grow lg:flex lg:items-center lg:w-auto right-0 top-0`}
                        >
                            <div className="flex h-fit flex-col justify-start gap-5 items-center md:hidden rounded-lg bg-[#424242] pt-4 pb-6">
                                {theme === "light" ? (
                                    <Image
                                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1699598453/new_portfolio/blogbox2_sftlp6.webp"
                                        priority={true}
                                        width={500}
                                        height={500}
                                        alt="blogbox logo"
                                        className="w-full px-4"
                                    />
                                ) : (
                                    <Image
                                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1703279388/new_portfolio/blogwhite_sopfqk.webp"
                                        priority={true}
                                        width={500}
                                        height={500}
                                        alt="blogbox logo"
                                        className="w-full px-4"
                                    />
                                )}
                                <div className=" h-full gap-5 flex flex-col justify-evenly items-center">
                                    {session ? (
                                        <div className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out cursor-pointer">
                                            My Blogs
                                        </div>
                                    ) : (
                                        <Link
                                            href="/join"
                                            className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out"
                                        >
                                            Join BlogBox
                                        </Link>
                                    )}
                                    {session && (
                                        <button
                                            onClick={() => pushToWrite()}
                                            className="hover:bg-[#4e4e4e] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out flex justify-center items-center gap-1"
                                            title="Write"
                                        >
                                            Write <LuPencilLine />
                                        </button>
                                    )}
                                    {session && (
                                        <button
                                            className="hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out border border-solid border-[#000000] dark:border-[#ffffff]"
                                            onClick={() => signOut()}
                                            title="Sign Out"
                                        >
                                            <LuLogOut />
                                        </button>
                                    )}
                                    <Link
                                        href="/"
                                        className="hover:bg-[#4e4e4e] flex justify-center text-xl items-center px-2 py-3 rounded-md transition duration-200 ease-in-out"
                                        title="Home"
                                    >
                                        <MdHome />
                                    </Link>
                                    {theme === "dark" ? (
                                        <button
                                            className="hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out"
                                            onClick={() => setTheme("light")}
                                            title="Light Mode"
                                        >
                                            <FiSun className="text-2xl" />
                                        </button>
                                    ) : (
                                        <button
                                            className="hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out"
                                            onClick={() => setTheme("dark")}
                                            title="Dark Mode"
                                        >
                                            <FiMoon className="text-2xl" />
                                        </button>
                                    )}

                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="flex items-center justify-center px-3 py-2 border rounded text-[#000000] dark:text-[#ffffff] border-[#000000] dark:border-[#ffffff] hover:bg-[#4e4e4e] hover:border-[#8b8181]"
                                    >
                                        <RiCloseFill className="h-6 w-6 " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-4 hidden">
                        {session ? (
                            <div className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out cursor-pointer dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]">
                                My Blogs
                            </div>
                        ) : (
                            <Link
                                href="/join"
                                className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]"
                            >
                                Join BlogBox
                            </Link>
                        )}

                        {session && (
                            <button
                                onClick={() => router.push(`/write/${id}`)}
                                className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out flex justify-center items-center gap-1"
                                title="Write"
                            >
                                Write <LuPencilLine />
                            </button>
                        )}
                        {session && (
                            <button
                                className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out border border-solid border-[#000000] dark:border-[#ffffff]"
                                onClick={() => signOut()}
                                title="Sign Out"
                            >
                                <LuLogOut />
                            </button>
                        )}
                    </div>
                </nav>
                <Link
                    href="/"
                    className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] md:flex justify-center text-xl items-center px-2 py-3 rounded-md transition duration-200 ease-in-out hidden"
                    title="Home"
                >
                    <MdHome />
                </Link>
                {theme === "dark" ? (
                    <button
                        className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out hidden md:block"
                        onClick={() => setTheme("light")}
                        title="Light Mode"
                    >
                        <FiSun className="text-2xl" />
                    </button>
                ) : (
                    <button
                        className="hover:bg-[#cacaca] px-2 py-2 rounded-md transition duration-200 ease-in-out hidden md:block"
                        onClick={() => setTheme("dark")}
                        title="Dark Mode"
                    >
                        <FiMoon className="text-2xl" />
                    </button>
                )}
            </header>

            <h1 className="text-5xl font-semibold text-center">Blogs</h1>
            <div className="flex flex-col items-center md:w-[70%] w-[95%]">
                <BlogCard />
            </div>
        </div>
    );
};

export default Blogs;
