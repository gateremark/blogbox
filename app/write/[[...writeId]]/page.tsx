"use client";

import { useSession } from "next-auth/react";
import { Toolbar } from "@/app/components/Toolbar";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Editor from "@/app/components/editor";

const page = () => {
    // console.log(uuidv4());
    // const { data: session } = useSession();
    // console.log(session);

    return (
        <div>
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
            </div>
            <div className=" px-16 lg:px-60 md:px-44 sm:px-24 xl:px-72 flex flex-col gap-3">
                <Toolbar />
            </div>
            <div className=" px-4 lg:px-48 md:px-32 sm:px-10 xl:px-60 flex flex-col gap-3">
                <Editor />
            </div>
        </div>
    );
};

export default page;
