"use client";

import { useSession } from "next-auth/react";
import { Toolbar } from "@/app/components/Toolbar";

const page = () => {
    // console.log(uuidv4());
    // const { data: session } = useSession();
    // console.log(session);
    return (
        <div>
            <div className="h-60">
                <h1>Page</h1>
            </div>
            <div className=" px-10 lg:px-60 md:px-44 sm:px-24 xl:px-72">
                <Toolbar />
            </div>
        </div>
    );
};

export default page;
