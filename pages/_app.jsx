import React from "react";
import { DocumentHead } from "components/document/head";
import { Provider } from "gql/provider";
import "bootswatch/dist/lux/bootstrap.min.css";

const Monarch = ({ Component, pageProps }) => {
  return (
    <>
      <DocumentHead />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default Monarch;
