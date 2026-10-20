import "./globals.css";

export const metadata = {
  title: "Albin Anto Devasia — Frontend Developer",
  description: "Frontend Developer with 3 years of experience building thoughtful, responsive web experiences with React, Next.js, and Tailwind CSS. Based in Dubai, UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
