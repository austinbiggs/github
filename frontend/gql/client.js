import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

import { GITHUB_ENDPOINT, GITHUB_TOKEN } from "./constants";

const client = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GITHUB_ENDPOINT,
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    }),
  });

export { client };
