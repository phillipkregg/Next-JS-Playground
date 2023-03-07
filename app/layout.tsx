import Link from "next/link";
import Navigation from "../components/navigation";
import "./globals.css";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="p-8">
          <div className="mb-8">
            <Navigation />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
