import { useRouter } from "next/router";

const BlogsPostPage = () => {
  const route = useRouter();
  return (
    <h1 className="blogs-post">Blogs page All catch - {route.query.slug[2]}</h1>
  );
};

export default BlogsPostPage;
