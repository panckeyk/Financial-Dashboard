// @ts-ignore
import "./ui/global.css";
import { inter } from "./ui/fonts";

// this is the root layout
// any ui you add to the root layout will be share across all pages in your application
// you can use the root layout to modify you html and body

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
