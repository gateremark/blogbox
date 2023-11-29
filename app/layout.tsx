import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BlogBox",
    description:
        "gaterebot is an innovative chat application powered by ChatGPT through the OpenAI API.",
    openGraph: {
        images: [
            {
                url: "https://res.cloudinary.com/dvuazircp/image/upload/v1699598453/new_portfolio/blogbox2_sftlp6.webp",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
