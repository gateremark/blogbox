"use client";

import Link from "next/link";
import { MdHome } from "react-icons/md";
import Image from "next/image";
import { LuLogOut, LuPencilLine } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";

const Blogs = () => {
    const { data: session } = useSession();
    return (
        <div className="relative h-screen pt-5 pb-6 md:px-8 px-4 flex flex-col items-center bg-gradient-to-b from-[#d6dbdc] to-[#ffffff]">
            <div className="flex w-full items-center gap-2">
                <nav className=" flex justify-between items-center w-full z-30">
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
                    <div className="flex gap-4 ">
                        {session ? (
                            <div className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out cursor-default">
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
                            <Link
                                href="/write"
                                className="hover:bg-[#cacaca] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out flex justify-center items-center gap-1"
                            title="Write"
                            >
                                Write <LuPencilLine />
                            </Link>
                        )}

                        {session && (
                            <button
                                className="hover:bg-[#cacaca] px-2 py-2 rounded-md transition duration-200 ease-in-out border border-solid border-[#000000]"
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
                    className="hover:bg-[#cacaca] flex justify-center text-xl items-center px-2 py-3 rounded-md transition duration-200 ease-in-out"
                    title="Home"
                >
                    <MdHome />
                </Link>
            </div>

            <h1 className="text-5xl font-semibold text-center">Blogs</h1>
        </div>
    );
};

export default Blogs;
