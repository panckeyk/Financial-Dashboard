// @ts-ignore
import "./ui/global.css";
import { inter } from "./ui/fonts";

// this is the root layout
// any ui you add to the root layout will be share across all pages in your application
// you can use the root layout to modify you html and body

import { Metadata } from "next";

export const metadata: Metadata = {
  // The %s in the template will be replaced with the specific page title.
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
