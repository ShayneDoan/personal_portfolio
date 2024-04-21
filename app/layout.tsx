import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://personal-portfolio-mocha-eight.vercel.app/"), //CHANGE

	title: "Shayaan Sufi",
	authors: {
		name: "Shayaan Sufi",
	},

	description:
		"I'm a full-stack developer, currently studying Computer Engineering at the University of Waterloo.",
	openGraph: {
		title: "Shayaan Sufi",
		description:
			"I'm a full-stack developer, currently studying Computer Engineering at the University of Waterloo.",
		url: "https://personal-portfolio-mocha-eight.vercel.app/", //CHANGE
		siteName: "Shayaan Sufi",
		images: "/og.png", //CHANGE
		type: "website",
	},
	keywords: ["personal portfolio", "shayaan sufi"],
};

export default function RootLayout({ children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
