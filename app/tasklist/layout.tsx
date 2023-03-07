import Link from "next/link";

export default function TasklistLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>The Task Manager app</h2>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Link href="/">Back to home</Link>
      </nav>

      {children}
    </section>
  );
}
