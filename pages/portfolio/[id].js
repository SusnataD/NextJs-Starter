import { useRouter } from "next/router";

const DetailsPage = () => {
  const route = useRouter();
  return <h1>Portfolio Detailspage! - {route.query.id}</h1>;
};

export default DetailsPage;
