"use client";

import Image from "next/image";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
const Nav: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const { data: session } = useSession();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
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

            <div className="flex gap-4 justify-center items-center">
                {session ? (
                    <div className=" flex gap-2 items-center justify-center px-3 rounded  py-2 transition duration-200 ease-in-out cursor-default bg-[#000000] text-[#D8DCDD] hover:bg-[#2E2E2E] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]">
                        Hello {session?.user?.name?.split(" ")[0] ?? "User"}
                    </div>
                ) : (
                    <Link
                        href="/join"
                        className=" flex gap-2 items-center justify-center px-3 rounded  py-2 transition duration-200 ease-in-out bg-[#000000] text-[#D8DCDD] hover:bg-[#2E2E2E] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]"
                    >
                        Join BlogBox
                    </Link>
                )}
                <Link
                    href="/blogs"
                    className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out flex justify-center items-center"
                >
                    All Blogs
                </Link>

                {session && (
                    <button
                        className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out border border-solid border-[#000000] dark:border-[#ffffff]"
                        onClick={() => signOut()}
                        title="Sign Out"
                    >
                        <LuLogOut />
                    </button>
                )}
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
            </div>
        </nav>
    );
};

export default Nav;
