"use client";

import Image from "next/image";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";
import { title } from "process";

const Nav: React.FC = () => {
    const { data: session } = useSession();
    return (
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
                        Hello {session?.user?.name?.split(" ")[0] ?? "User"}
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
                        className="hover:bg-[#cacaca] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out"
                        onClick={() => signOut()}
                        title="Sign Out"
                    >
                        <LuLogOut />
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Nav;
