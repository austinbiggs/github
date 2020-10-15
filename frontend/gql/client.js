import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

import { GITHUB_ENDPOINT } from "./constants";

const client = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GITHUB_ENDPOINT,
    }),
  });

export { client };
