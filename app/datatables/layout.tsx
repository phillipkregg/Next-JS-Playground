import Link from "next/link";

export const metadata = {
  title: "Datatables - TanStack",
  description: "Welcome to Next.js",
};

export default function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <h2 className="text-2xl">TanStack Table Demo</h2>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="p-4 my-10 bg-gray-800">
        <ul className="flex flex-row">
          <li className="mr-6">
            <Link href={"/datatables/basic"}>Basic Datatable</Link>
          </li>
          <li className="mr-6">
            <Link href={"/datatables/dnd"}>Drag N Drop Datatable</Link>
          </li>
          <li>
            <Link href={"/datatables/pagination"}>Paginating Datatable</Link>
          </li>
        </ul>
      </nav>

      {children}
    </section>
  );
}
