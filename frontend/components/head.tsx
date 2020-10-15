import React from "react";
import Head from "next/head";

const DocHead = () => {
  return (
    <Head>
      <title>Monarch - Austin Biggs</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="shortcut icon" href="/images/favicon.png" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      />
    </Head>
  );
};

export { DocHead };
