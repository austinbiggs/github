import { isEmpty } from "lodash";

export const pluckNodes = (repos: any[]) => {
  if (isEmpty(repos)) {
    return;
  }

  return repos.map((repo: any) => repo.node);
};
