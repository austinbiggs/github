import React from "react";
import { DocHead } from "components/head";
import "bootswatch/dist/lux/bootstrap.min.css";

const Monarch = ({ Component, pageProps }) => {
  return (
    <>
      <DocHead />
      <Component {...pageProps} />
    </>
  );
};

export default Monarch;
