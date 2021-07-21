import React from "react";
import Link from "next/link";

const News = () => {
  return (
    <>
      <h2>The News page</h2>
      <ul>
        <li>
          <Link href="/news/what-is-nextjs">What is NextJS ?</Link>
        </li>
        <li>
          <Link href="/news/what-is-reactjs">What is ReactJS ?</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
