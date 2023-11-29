import Image from "next/image";

const Nav: React.FC = () => {
    return (
        <nav className=" flex justify-between items-center w-full z-20">
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
                width={500}
                height={500}
                alt="blogbox logo"
                className="w-10 sm:w-20 h-auto md:hidden"
            />
            <div className="flex gap-4 ">
                <button className="hover:bg-[#cacaca] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out">
                    Log in
                </button>
                <button className=" bg-[#000000] text-[#D8DCDD] md:px-3 md:py-2 px-2 py-1 rounded-md hover:bg-[#2E2E2E] transition duration-200 ease-in-out">
                    Register
                </button>
                <button>All blogs</button>
            </div>
        </nav>
    );
};

export default Nav;
