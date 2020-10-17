import { gql } from "@apollo/client";

export const SearchRepositories = gql`
  query SearchRepositories($numberOfResults: Int!, $query: String!) {
    search(first: $numberOfResults, type: REPOSITORY, query: $query) {
      edges {
        node {
          ... on Repository {
            description
            descriptionHTML
            languages(first: 10) {
              edges {
                node {
                  id
                  color
                  name
                }
              }
            }
            name
            nameWithOwner
            owner {
              id
              avatarUrl
              login
              url
            }
            stargazerCount
            url
          }
        }
      }
    }
  }
`;
