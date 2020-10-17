import html from "node-html-parser/dist/nodes/html";

export interface Language {
  id: number;
  color: string;
  edges: any;
  name: string;
}

export interface Owner {
  id: number;
  avatarUrl: string;
  login: string;
  url: string;
}

export interface Repository {
  description: string;
  descriptionHTML: html;
  languages: Language[];
  name: string;
  nameWithOwner: string;
  owner: Owner;
  stargazerCount: number;
  url: string;
}

export interface Props {
  loading: boolean;
  results: Repository[];
  searchTerm: string;
}
