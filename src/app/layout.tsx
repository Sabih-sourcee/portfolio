import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/site";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.author.name}`,
	},
	description: siteConfig.description,
	authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
	icons: { icon: siteConfig.images.profile },
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f4f4f0" },
		{ media: "(prefers-color-scheme: dark)", color: "#1f1f1a" },
	],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en' className={fontVariables} suppressHydrationWarning>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
