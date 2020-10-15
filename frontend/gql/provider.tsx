import { ApolloProvider } from "@apollo/client";

import * as React from "react";

import { client } from "./client";

const Provider: React.FC = (props) => {
  return <ApolloProvider client={client()}>{props.children}</ApolloProvider>;
};

export { Provider };
