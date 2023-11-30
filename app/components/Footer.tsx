const Footer: React.FC = () => {
    return (
        <footer className=" flex md:justify-end justify-center items-center w-full z-30">
            <div className="flex gap-4 ">
                <button className="hover:bg-[#cacaca] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out opacity-70 hover:opacity-100">
                    Privacy Policy
                </button>
                <button className="hover:bg-[#cacaca] md:px-3 md:py-2 px-2 py-1 rounded-md transition duration-200 ease-in-out opacity-70 hover:opacity-100">
                    Terms & Conditions
                </button>
            </div>
        </footer>
    );
};

export default Footer;
