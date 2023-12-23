"use client";

import Image from "next/image";
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useTheme } from "next-themes";

const Join: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const [providers, setProviders] = useState<Record<string, any> | null>(
        null
    );
    useEffect(() => {
        setMounted(true);
        const fetchProviders = async () => {
            const providers = await getProviders();
            // Handle providers data as needed
            // console.log(providers);
            setProviders(providers as Record<string, any> | null);
        };

        fetchProviders();
    }, []);

    // useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <main className="relative h-fit md:h-screen pt-4 pb-6 md:px-8 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] dark:from-[#000000] dark:to-[#121212]">
            {theme === "light" ? (
                <Image
                    src="https://res.cloudinary.com/dvuazircp/image/upload/v1699598453/new_portfolio/blogbox2_sftlp6.webp"
                    priority={true}
                    width={500}
                    height={500}
                    alt="blogbox logo"
                    className="md:absolute w-60 h-auto z-30 top-[22px] md:left-8"
                />
            ) : (
                <Image
                    src="https://res.cloudinary.com/dvuazircp/image/upload/v1703279388/new_portfolio/blogwhite_sopfqk.webp"
                    priority={true}
                    width={500}
                    height={500}
                    alt="blogbox logo"
                    className="md:absolute w-60 h-auto z-30 top-[22px] md:left-8"
                />
            )}

            <div className="bg___svg h-full w-full absolute z-20 dark:opacity-5"></div>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                {theme === "dark" ? (
                    <Image
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1703279901/new_portfolio/reading_no5et4.webp"
                        height={500}
                        width={500}
                        alt="A person reading"
                        className="w-[500px] h-auto pt-10 z-30"
                    />
                ) : (
                    <Image
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1701293531/new_portfolio/kqvhmllwvodva5pjr6fs.webp"
                        height={500}
                        width={500}
                        alt="A person reading"
                        className="w-[500px] h-auto pt-10 z-30"
                    />
                )}

                <div className=" flex flex-col items-center z-30 pt-10">
                    <h1 className=" text-5xl font-semibold text-center">
                        Sign in / Register
                    </h1>
                    {providers ? (
                        <div className="flex flex-col gap-3 pt-10 pb-6">
                            {Object.values(providers).map((provider) => (
                                <div
                                    key={provider.name}
                                    style={{ marginBottom: 0 }}
                                    className=""
                                >
                                    <button
                                        className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]"
                                        onClick={() => signIn(provider.id)}
                                    >
                                        <FcGoogle />
                                        <span>
                                            Sign in with {provider.name}
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-fit pt-6">
                            {" "}
                            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#000000]"></div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Join;
