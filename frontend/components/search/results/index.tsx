import * as React from "react";
import classNames from "classnames";
import { isEmpty, truncate } from "lodash";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";

import { Props, Repository } from "../types";

import styles from "./style.m.scss";

const Results = (props: Props) => {
  const { loading, searchTerm } = props;

  const [selectedRepository, setSelectedRepository] = React.useState(null);

  console.log({ selectedRepository });
  const results = props.results || [];

  const renderLoading = () => {
    return (
      <Col xs={1} sm={1} md={1} lg={1} xl={1}>
        <div className={styles.loading}>
          <Spinner animation="border" variant="dark" />
        </div>
      </Col>
    );
  };

  const renderRepository = (repository: Repository) => (
    <Col className={styles.repository} key={repository.nameWithOwner}>
      <Card>
        <Card.Header>
          <a href={repository.owner.url} target="_blank">
            {repository.owner.login}
          </a>
          /
          <a href={repository.url} target="_blank">
            {repository.name}
          </a>
        </Card.Header>
        <Card.Body>
          {truncate(repository.description, { length: 100 })}
          <Button
            className={styles.button}
            variant="primary"
            size="sm"
            onClick={() => setSelectedRepository(repository)}
          >
            See Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderResults = () => {
    return (
      <>
        {isEmpty(results) && !isEmpty(searchTerm) ? (
          <h5 className={styles.noResults}>There are no results&hellip;</h5>
        ) : (
          <>
            {results.map((repository: Repository) =>
              renderRepository(repository)
            )}
          </>
        )}
      </>
    );
  };

  return (
    <Row
      className={classNames("justify-content-md-center", [styles.repository])}
    >
      {loading ? renderLoading() : renderResults()}
    </Row>
  );
};

export { Results };
