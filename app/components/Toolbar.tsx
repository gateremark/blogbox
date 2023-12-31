"use client";

import { ElementRef, useRef, useState, useEffect } from "react";
import { CiImageOn } from "react-icons/ci";
import TextareaAutosize from "react-textarea-autosize";
import { ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "sonner";
import { BsShareFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export const Toolbar = () => {
    const inputRef = useRef<ElementRef<"textarea">>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState("Add Title...");
    const [image, setImage] = useState(null);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const onChange = (e: any) => {
        setImage(e.target.files);
        // console.log(e.target.files);
    };

    const enableInput = () => {
        setIsEditing(true);
        setTimeout(() => {
            setValue(value);
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(value.length, value.length);
        }, 0);
    };

    const disableInput = () => {
        setIsEditing(false);
    };

    const onInput = (value: string) => {
        setValue(value);
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            disableInput();
        }
    };
    return (
        <div>
            <Toaster
                position="bottom-right"
                theme={theme === "dark" ? "dark" : "light"}
                closeButton
            />
            <div
                className=" fixed top-[10%] right-[3%] z-10 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full transition duration-500 ease-in-out bg-[#000000] text-[#D8DCDD] hover:bg-[#2E2E2E] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#808080]"
                title="Copy Link to Draft Blog"
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Link to Draft Blog Copied!");
                }}
            >
                <BsShareFill className="text-lg" />
            </div>
            <div className="flex gap-2 items-center">
                <button className="relative opacity-100 bg-[#cacaca] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-100 ease-in-out flex justify-center items-center gap-2">
                    <label
                        htmlFor="image"
                        className=" cursor-pointer flex justify-center items-center gap-2 dark:text-[#000000]"
                    >
                        <CiImageOn className="text-xl cursor-pointer dark:text-[#000000]" />
                        Add Cover
                    </label>
                    <input
                        type="file"
                        id="image"
                        style={{
                            opacity: 0,
                            position: "absolute",
                            cursor: "pointer",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                        }}
                        onChange={onChange}
                        title=""
                        accept=".jpg, .png, .jpeg, .webp"
                        className="cursor-pointer"
                    />
                </button>
                <span className=" text-[#7e7e7e] italic">
                    &quot;<span className=" font-bold">Ctrl + C</span> for AI
                    autocompletion&quot;
                </span>
            </div>
            {isEditing ? (
                <TextareaAutosize
                    ref={inputRef}
                    onBlur={disableInput}
                    onKeyDown={onKeyDown}
                    value={value}
                    onChange={(e) => onInput(e.target.value)}
                    className=" w-full text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none"
                />
            ) : (
                <div
                    onClick={enableInput}
                    className=" pt-3 text-5xl font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF]"
                >
                    {value}
                </div>
            )}
        </div>
    );
};
