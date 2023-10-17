//URL :: domain/news/important-news
"use client";

import { usePathname } from "next/navigation";

const ImportantNewsPage = () => {
  const path = usePathname();

  console.log(path);

  return <h1 className="news-text">ImportantNewsPage</h1>;
};

export default ImportantNewsPage;
