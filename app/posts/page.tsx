import Link from "next/link";
import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";

async function getPosts() {
  const allPostsData = await getSortedPostsData();
  return allPostsData;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className="">
        <h2 className="">Blog</h2>
        <ul className="">
          {posts.map(({ id, date, title }) => (
            <li className="" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
