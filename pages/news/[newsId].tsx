import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId); //prints the value of newsId
  return (
    <>
      <h2>This is Details page</h2>
    </>
  );
};

export default DetailPage;
