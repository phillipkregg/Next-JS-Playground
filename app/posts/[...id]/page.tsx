import { getPostData } from "../../../lib/posts";
import Date from "../../../components/date";
import type Post from "../../../types/Post";

export default async function Page({ params }) {
  const postData: Post = await getPostData(params.id);
  return (
    <div>
      <h1 className="">{postData.title}</h1>
      <div className="">
        <Date dateString={postData.date} />
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
