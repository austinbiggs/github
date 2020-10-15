import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const githubEndpoint = process.env.GITHUB_ENDPOINT;

const headers = {
  "x-hasura-admin-secret": hasuraAdminSecret,
};

const client = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      headers,
      uri: githubEndpoint,
    }),
  });

export default client;
