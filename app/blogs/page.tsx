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

const Blogs = () => {
    const { data: session } = useSession();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const id = uuidv4();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    console.log("Agent:", navigator.userAgent.match);
    return (
        <div className="relative h-screen pt-5 pb-6 md:px-8 px-4 flex flex-col items-center bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] gap-2 dark:from-[#000000] dark:to-[#121212]">
            <header className="flex w-full items-center gap-2">
                <nav className=" flex justify-between items-center w-full z-30">
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
                    <div className="flex gap-4 ">
                        {session ? (
                            <div className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out cursor-default dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]">
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
                        {/* if
                        (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera
                        Mini|IEMobile/i)){" "}
                        {
                            // Code for mobile devices
                        }{" "}
                        else{" "}
                        {
                            // Code for desktop devices
                        } */}
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
                    className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] flex justify-center text-xl items-center px-2 py-3 rounded-md transition duration-200 ease-in-out"
                    title="Home"
                >
                    <MdHome />
                </Link>
                {theme === "dark" ? (
                    <button
                        className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out"
                        onClick={() => setTheme("light")}
                        title="Light Mode"
                    >
                        <FiSun className="text-2xl" />
                    </button>
                ) : (
                    <button
                        className="hover:bg-[#cacaca] px-2 py-2 rounded-md transition duration-200 ease-in-out"
                        onClick={() => setTheme("dark")}
                        title="Dark Mode"
                    >
                        <FiMoon className="text-2xl" />
                    </button>
                )}
            </header>

            <h1 className="text-5xl font-semibold text-center">Blogs</h1>
            <div className="flex flex-col"></div>
        </div>
    );
};

export default Blogs;
