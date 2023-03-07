import Home from "./home_page";
import { getSortedPostsData } from "../lib/posts";

async function getPosts() {
  const allPostsData = await getSortedPostsData();
  return allPostsData;
}

export default async function Page() {
  const posts = await getPosts();

  return <Home posts={posts} />;
}
