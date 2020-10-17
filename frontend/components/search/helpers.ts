import { isEmpty } from "lodash";

import { Repository } from "./types";

export const pluckRepos = (repos: Repository[]) => {
  if (isEmpty(repos)) {
    return;
  }

  return repos.map((repo: any) => repo.node);
};
