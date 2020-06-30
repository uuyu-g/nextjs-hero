
import { Heroes } from "../components/Heroes";
import { AppLayout } from "../components/AppLayout";

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1"
  );
  const postList = await response.json();
  return {
    props: {
      postList,
    },
  };
}

export default function IndexPage({ postList }) {
  return (
    <AppLayout />
  );
}
