import { ApolloError, useQuery } from "@apollo/client";
import * as React from "react";
import { Form } from "react-bootstrap";
import { isEmpty } from "lodash";

import { pluckNodes } from "./helpers";
import { Results } from "./results";
import { SearchRepositories } from "./gql/search-repositories";

const MAX_RESULTS = 5;

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [repositories, setRepositories] = React.useState([]);

  const { loading } = useQuery(SearchRepositories, {
    skip: isEmpty(searchTerm),
    variables: {
      numberOfResults: MAX_RESULTS,
      query: searchTerm,
    },
    onCompleted: (data: any) => {
      const { edges } = data.search;

      setRepositories(pluckNodes(edges));
    },
    onError: (error: ApolloError) => {
      // todo(austinbiggs): I would replace this w/ a toast message
      alert(error.message);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      return;
    }

    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Form.Control
        type="input"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event)
        }
        placeholder="Search Public GitHub Repo's&hellip;"
      />

      <Results
        loading={loading}
        results={repositories}
        searchTerm={searchTerm}
      />
    </>
  );
};

export { Search };
