import { useRouter } from "next/router";

const ClientsProjects = () => {
  const router = useRouter();
  return <h1>ClientsProjects Page! - {router.query.id}</h1>;
};

export default ClientsProjects;
