import Link from "next/link";

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
    <section className="">
      <h2 className="text-2xl">The Task Manager app</h2>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}

      <nav>
        <Link href="/">Back to home</Link>
      </nav>
    </section>
  );
}
