import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
    return (
        <main className="relative h-fit pt-4 pb-6 md:px-8 px-4 flex flex-col items-center bg-gradient-to-b from-[#d6dbdc] to-[#ffffff]">
            <header className=" w-full h-[75px] flex items-center md:before:absolute md:before:h-[300px] md:before:w-[480px] md:before:-translate-x-1/2 md:before:rounded-full md:before:bg-gradient-radial md:before:to-transparent md:before:blur-2xl md:before:content-[''] md:after:absolute md:after:h-[180px] md:after:w-[240px] md:after:translate-x-1/3 md:after:bg-gradient-conic md:after:from-sky-200 md:after:via-blue-200 md:after:blur-2xl md:after:content-[''] md:before:dark:bg-gradient-to-br md:before:dark:from-transparent md:before:dark:to-blue-700 md:before:dark:opacity-10 md:after:dark:from-sky-900 md:after:dark:via-[#0141ff] md:after:dark:opacity-40 md:before:lg:h-[360px]">
                <Nav />
            </header>
            <div className="bg___svg h-full w-full absolute z-20"></div>
            <div className="flex flex-col items-center justify-center text-center pt-8 pb-6 max-w-3xl space-y-4 z-30">
                <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold ">
                    ...thoughts, stories, and creativity converge seamlessly.
                    Welcome to <span className=" underline ">BlogBox</span>
                </h1>
                <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                    The unified space where your ideas flow <br /> effortlessly
                    onto the digital canvas.
                </h3>
                <button className=" flex gap-2 items-center justify-center bg-[#000000] text-[#D8DCDD] px-3 rounded hover:bg-[#2E2E2E] py-2 transition duration-200 ease-in-out">
                    Join BlogBox <FaArrowRight />
                </button>
                <Image
                    src="https://res.cloudinary.com/dvuazircp/image/upload/v1701293531/new_portfolio/kqvhmllwvodva5pjr6fs.webp"
                    height={500}
                    width={500}
                    alt="Logo"
                    className="w-[500px] h-auto pt-10"
                />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
