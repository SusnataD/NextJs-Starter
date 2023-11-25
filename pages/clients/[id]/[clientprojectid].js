import { useRouter } from "next/router";

const ClientsProjectsPage = () => {
  const router = useRouter();
  return (
    <h1>
      Specific project page with the Clients ID :: {router.query.id}/ Associated
      Project ID :: {router.query.clientprojectid}
    </h1>
  );
};

export default ClientsProjectsPage;
