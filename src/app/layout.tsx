import type { Metadata } from "next";
import { Provider } from "react-redux";
import store from "@/store/store"
import localFont from "next/font/local";
import "./globals.css";

const hack = localFont({
  src: [
    {path: "../fonts/Hack-Regular.woff", weight: "400", style: "normal"}, 
    {path: "../fonts/Hack-Italic.woff", weight: "400", style: "italic"}, 
    {path: "../fonts/Hack-Bold.woff", weight: "700", style: "normal"}, 
    {path: "../fonts/Hack-BoldItalic.woff", weight: "700", style: "italic"}
  ],
  variable: "--font-hack",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hack.variable} font-hack color-wdd-text bg-wdd-bg antialiased`}
      >
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
