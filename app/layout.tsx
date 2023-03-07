import Link from "next/link";
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
            <ul className="flex flex-row ">
              <li className="float-left inline-block">
                <Link
                  href={"/"}
                  className="px-4 py-4 ease-in-out duration-100 bg-blue-500 text-white hover:bg-blue-300 hover:text-blue-800 no-underline hover:no-underline"
                >
                  Home
                </Link>
              </li>
              <li className="float-left inline-block">
                <Link
                  href={"/posts"}
                  className="px-4 py-4 ease-in-out duration-100 bg-blue-500 text-white hover:bg-blue-300 hover:text-blue-800 no-underline hover:no-underline"
                >
                  Posts
                </Link>
              </li>
              <li className="float-left">
                <Link
                  href={"/tasklist"}
                  className="px-4 py-4 ease-in-out duration-100 bg-blue-500 hover:bg-blue-300 text-white hover:text-blue-800 no-underline hover:no-underline"
                >
                  Task List
                </Link>
              </li>
            </ul>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
