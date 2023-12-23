"use client";

import { useSession } from "next-auth/react";
import { Toolbar } from "@/app/components/Toolbar";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Editor from "@/app/components/editor";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Page = () => {
    // console.log(uuidv4());
    // const { data: session } = useSession();
    // console.log(session);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className=" bg-gradient-to-b dark:from-[#000000] dark:to-[#121212]">
            <div className="h-60 flex gap-2 items-center">
                <h1 className=" ml-5">Incomplete...</h1>
                <Link
                    href="/blogs"
                    className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] flex justify-center items-center text-xl gap-2 px-2 py-3 rounded-md transition duration-200 ease-in-out"
                    title="Blogs"
                >
                    {" "}
                    <MdArrowBack />
                    Go back
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
            </div>
            <div className=" flex flex-col gap-2">
                <div className=" px-16 lg:px-60 md:px-44 sm:px-24 xl:px-72 flex flex-col gap-3">
                    <Toolbar />
                </div>
                <div className=" px-4 lg:px-48 md:px-32 sm:px-10 xl:px-60 flex flex-col gap-3">
                    <Editor />
                </div>
            </div>
        </div>
    );
};

export default Page;
