import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
    return (
        <main className=" pt-4 pb-6 md:px-8 px-4 flex flex-col items-center">
            <header className=" w-full h-[75px] flex items-center ">
                <Nav />
            </header>
            <div className="flex flex-col items-center justify-center text-center pt-8 max-w-3xl space-y-4 ">
                <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] -z-10">
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
