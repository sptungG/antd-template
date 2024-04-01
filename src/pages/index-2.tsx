import dynamic from "next/dynamic";
import React from "react";

const RTEditor = dynamic(() => import("@/components/ckeditor/RTEditor"), { ssr: false });

const Page = () => {
  return <RTEditor />;
};

export default Page;
