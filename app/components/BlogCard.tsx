import Image from "next/image";
import testimg from "@/app/assets/testimg.jpg";
import gatereimg from "@/app/assets/gateremark.jpg";
import reactimg from "@/app/assets/reactimg.jpg";
import rustimg from "@/app/assets/rustimg.png";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const BlogCard = (props: Props) => {
    const [mounted, setMounted] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [likeCount, setLikeCount] = useState(8);
    const router = useRouter();
    const { theme } = useTheme();
    const id = uuidv4();
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            <Toaster
                position="bottom-right"
                theme={theme === "dark" ? "dark" : "light"}
                closeButton
            />
            <div className=" flex flex-col bg-transparent border border-slate-400 rounded-2xl hover:border-slate-500 dark:hover:border-slate-600 dark:border-slate-800/80 p-6 my-3 w-full">
                <div className="flex gap-3 items-center">
                    <Image
                        src={gatereimg}
                        alt=""
                        className=" w-10 h-10 rounded-full"
                        loading="lazy"
                    />
                    <div className=" flex flex-col">
                        <h1 className="font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                            Mark Gatere
                        </h1>
                        <a
                            href="#"
                            className="text-sm text-slate-500 dark:text-slate-400 font-normal cursor-pointer hover:text-slate-600 hover:dark:text-slate-500"
                        >
                            gatere.blogbox.dev
                        </a>
                    </div>
                </div>
                <div className=" flex gap-3 mt-3 flex-col md:flex-row">
                    <div
                        className=" flex flex-col"
                        onClick={() => router.push(`/blog/${id}`)}
                    >
                        <h1 className="font-heading text-base sm:text-xl font-semibold sm:font-bold  text-slate-700 dark:text-slate-200 cursor-pointer">
                            Getting Started with React
                        </h1>
                        <p className="text-base font-normal text-slate-500 dark:text-slate-400 cursor-pointer line-clamp-3 hidden md:block">
                            {" "}
                            Blog Subtitle - Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Ut inventore pariatur
                            suscipit voluptatem quod cum blanditiis veniam,
                            quidem, explicabo animi aperiam! Magnam, alias nulla
                            magni eius molestiae, aliquid consequatur harum
                            voluptates tempora recusandae ut officia. Fugit
                            consectetur debitis impedit, modi, porro explicabo
                            nemo quae, recusandae soluta quibusdam culpa
                            perferendis atque.
                        </p>
                    </div>
                    <div className=" h-32 md:w-[1000px] rounded-md ">
                        <Image
                            src={reactimg}
                            alt="blogimage"
                            className=" w-full h-full rounded-md"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-4 text-slate-700 dark:text-slate-200">
                    <span className="flex gap-1 items-center">
                        {isLiked ? (
                            <AiFillLike
                                className="cursor-pointer text-lg"
                                title="Liked"
                                onClick={() => {
                                    setIsLiked(!isLiked);
                                    setLikeCount(likeCount - 1);
                                }}
                            />
                        ) : (
                            <AiOutlineLike
                                className="cursor-pointer text-lg"
                                title="Like"
                                onClick={() => {
                                    toast.info("Liked! 🚀");
                                    setIsLiked(!isLiked);
                                    setLikeCount(likeCount + 1);
                                }}
                            />
                        )}
                        <p className=" font-medium">{likeCount} Likes</p>
                    </span>
                    <span className="flex gap-1 items-center">
                        <span className=" flex flex-wrap gap-1 justify-end">
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[126px] truncate text-left">
                                {" "}
                                React
                            </p>
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[120px] truncate text-left">
                                {" "}
                                Frontend Development
                            </p>
                        </span>
                        <span className=" cursor-default">|</span>
                        {isSaved ? (
                            <BsBookmarkCheckFill
                                className="cursor-pointer"
                                title="Saved"
                                onClick={() => setIsSaved(!isSaved)}
                            />
                        ) : (
                            <BsBookmarkCheck
                                className="cursor-pointer"
                                title="Save blog"
                                onClick={() => {
                                    toast.info("Bookmarked! 🚀");
                                    setIsSaved(!isSaved);
                                }}
                            />
                        )}
                    </span>
                </div>
            </div>

            {/* --------------------------------------------------- Sample Blog 2 ----------------------------- */}

            <div className=" flex flex-col bg-transparent border border-slate-400 rounded-2xl hover:border-slate-500 dark:hover:border-slate-600 dark:border-slate-800/80 p-6 my-3 w-full">
                <div className="flex gap-3 items-center">
                    <Image
                        src={gatereimg}
                        alt=""
                        className=" w-10 h-10 rounded-full"
                        loading="lazy"
                    />
                    <div className=" flex flex-col">
                        <h1 className="font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                            Mark Gatere
                        </h1>
                        <a
                            href="#"
                            className="text-sm text-slate-500 dark:text-slate-400 font-normal cursor-pointer hover:text-slate-600 hover:dark:text-slate-500"
                        >
                            gatere.blogbox.dev
                        </a>
                    </div>
                </div>
                <div className=" flex gap-3 mt-3 flex-col md:flex-row">
                    <div
                        className=" flex flex-col"
                        onClick={() => router.push(`/blog/${id}`)}
                    >
                        <h1 className="font-heading text-base sm:text-xl font-semibold sm:font-bold  text-slate-700 dark:text-slate-200 cursor-pointer">
                            Python for Data Science and Machine Learning
                        </h1>
                        <p className="text-base font-normal text-slate-500 dark:text-slate-400 cursor-pointer line-clamp-3 hidden md:block">
                            {" "}
                            Blog Subtitle - Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Ut inventore pariatur
                            suscipit voluptatem quod cum blanditiis veniam,
                            quidem, explicabo animi aperiam! Magnam, alias nulla
                            magni eius molestiae, aliquid consequatur harum
                            voluptates tempora recusandae ut officia. Fugit
                            consectetur debitis impedit, modi, porro explicabo
                            nemo quae, recusandae soluta quibusdam culpa
                            perferendis atque.
                        </p>
                    </div>
                    <div className=" h-32 md:w-[1000px] rounded-md">
                        <Image
                            src={testimg}
                            alt="blogimage"
                            className=" w-full h-full rounded-md"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-4 text-slate-700 dark:text-slate-200 w-full">
                    <span className="flex gap-1 items-center">
                        {isLiked ? (
                            <AiFillLike
                                className="cursor-pointer text-lg"
                                title="Liked"
                                onClick={() => {
                                    setIsLiked(!isLiked);
                                    setLikeCount(likeCount - 1);
                                }}
                            />
                        ) : (
                            <AiOutlineLike
                                className="cursor-pointer text-lg"
                                title="Like"
                                onClick={() => {
                                    toast.info("Liked! 🚀");
                                    setIsLiked(!isLiked);
                                    setLikeCount(likeCount + 1);
                                }}
                            />
                        )}
                        <p className=" font-medium">{likeCount} Likes</p>
                    </span>
                    <span className="flex gap-1 items-center">
                        <span className=" flex flex-wrap gap-1 justify-end">
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[126px] truncate text-left">
                                {" "}
                                Python
                            </p>
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[120px] truncate text-left">
                                {" "}
                                Data Science
                            </p>
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[120px] truncate text-left">
                                {" "}
                                Machine Learning
                            </p>
                        </span>
                        <span className=" cursor-default">|</span>
                        {isSaved ? (
                            <BsBookmarkCheckFill
                                className="cursor-pointer"
                                title="Saved"
                                onClick={() => setIsSaved(!isSaved)}
                            />
                        ) : (
                            <BsBookmarkCheck
                                className="cursor-pointer"
                                title="Save blog"
                                onClick={() => {
                                    toast.info("Bookmarked! 🚀");
                                    setIsSaved(!isSaved);
                                }}
                            />
                        )}
                    </span>
                </div>
            </div>

            {/* --------------------------------------------------- Sample Blog 3 ----------------------------- */}

            <div className=" flex flex-col bg-transparent border border-slate-400 rounded-2xl hover:border-slate-500 dark:hover:border-slate-600 dark:border-slate-800/80 p-6 my-3 w-full">
                <div className="flex gap-3 items-center">
                    <Image
                        src={gatereimg}
                        alt=""
                        className=" w-10 h-10 rounded-full"
                        loading="lazy"
                    />
                    <div className=" flex flex-col">
                        <h1 className="font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                            Mark Gatere
                        </h1>
                        <a
                            href="#"
                            className="text-sm text-slate-500 dark:text-slate-400 font-normal cursor-pointer hover:text-slate-600 hover:dark:text-slate-500"
                        >
                            gatere.blogbox.dev
                        </a>
                    </div>
                </div>
                <div className=" flex gap-3 mt-3 flex-col md:flex-row">
                    <div
                        className=" flex flex-col"
                        onClick={() => router.push(`/blog/${id}`)}
                    >
                        <h1 className="font-heading text-base sm:text-xl font-semibold sm:font-bold  text-slate-700 dark:text-slate-200 cursor-pointer">
                            Develop a REST API with Rust
                        </h1>
                        <p className="text-base font-normal text-slate-500 dark:text-slate-400 cursor-pointer line-clamp-3 hidden md:block">
                            {" "}
                            Blog Subtitle - Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Ut inventore pariatur
                            suscipit voluptatem quod cum blanditiis veniam,
                            quidem, explicabo animi aperiam! Magnam, alias nulla
                            magni eius molestiae, aliquid consequatur harum
                            voluptates tempora recusandae ut officia. Fugit
                            consectetur debitis impedit, modi, porro explicabo
                            nemo quae, recusandae soluta quibusdam culpa
                            perferendis atque.
                        </p>
                    </div>
                    <div className=" h-32 md:w-[1000px] rounded-md">
                        <Image
                            src={rustimg}
                            alt="blogimage"
                            className=" w-full h-full rounded-md"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-4 text-slate-700 dark:text-slate-200">
                    <span className="flex gap-1 items-center">
                        {isLiked ? (
                            <AiFillLike
                                className="cursor-pointer text-lg"
                                title="Liked"
                                onClick={() => {
                                    setIsLiked(!isLiked);
                                    setLikeCount(likeCount - 1);
                                }}
                            />
                        ) : (
                            <AiOutlineLike
                                className="cursor-pointer text-lg"
                                title="Like"
                                onClick={() => {
                                    toast.info("Liked! 🚀");
                                    setIsLiked(!isLiked);
                                    setLikeCount(likeCount + 1);
                                }}
                            />
                        )}
                        <p className=" font-medium">{likeCount} Likes</p>
                    </span>
                    <span className="flex gap-1 items-center">
                        <span className=" flex flex-wrap gap-1 justify-end">
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[126px] truncate text-left">
                                {" "}
                                Rust
                            </p>
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[120px] truncate text-left">
                                {" "}
                                Backend Development
                            </p>
                            <p className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[120px] truncate text-left">
                                {" "}
                                API
                            </p>
                        </span>
                        <span className=" cursor-default">|</span>
                        {isSaved ? (
                            <BsBookmarkCheckFill
                                className="cursor-pointer"
                                title="Saved"
                                onClick={() => setIsSaved(!isSaved)}
                            />
                        ) : (
                            <BsBookmarkCheck
                                className="cursor-pointer"
                                title="Save blog"
                                onClick={() => {
                                    toast.info("Bookmarked! 🚀");
                                    setIsSaved(!isSaved);
                                }}
                            />
                        )}
                    </span>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
