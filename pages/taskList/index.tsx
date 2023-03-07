import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function TaskList() {
  return (
    <Layout>
      <Head>
        <title>Task List</title>
      </Head>

      <h1>Task Management</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
