import * as React from "react";
import { isEmpty } from "lodash";
import { Modal } from "react-bootstrap";

import { Language, Repository } from "../../types";
import { pluckNodes } from "../../helpers";

interface Props {
  repo: Repository;
  setSelectedRepo: React.Dispatch<React.SetStateAction<Repository>>;
}

const RepoModal = (props: Props) => {
  const { repo, setSelectedRepo } = props;

  const renderLanguages = () => {
    const { edges } = repo.languages;

    return (
      <ul>
        {pluckNodes(edges).map((language: Language) => {
          return (
            <li key={language.id} style={{ color: language.color }}>
              {language.name}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Modal show={!isEmpty(repo)} onHide={() => setSelectedRepo(null)}>
      <Modal.Header closeButton>
        <Modal.Title>
          <a href={repo.owner.url} target="_blank">
            {repo.owner.login}
          </a>
          /
          <a href={repo.url} target="_blank">
            {repo.name}
          </a>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* In production this HTML needs to be sanitized */}
        <div>
          <h6>Description:</h6>
          <div dangerouslySetInnerHTML={{ __html: repo.descriptionHTML }}></div>
        </div>
        <br />

        <div>
          <h6>{`Stargazers: ${repo.stargazerCount}`}</h6>
        </div>

        <div>
          <h6>Languages:</h6>
          {renderLanguages()}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export { RepoModal };
