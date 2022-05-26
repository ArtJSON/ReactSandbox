import React from "react";
import Link from "next/link";
const Index = () => {
  return (
    <div>
      <Link href={"/about"}>
        <a>About page</a>
      </Link>
      <h1>Lalalalal</h1>
    </div>
  );
};

export default Index;
