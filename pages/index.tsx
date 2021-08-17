import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Search } from "components/search";

import styles from "./home/style.module.scss";

const Home = () => {
  return (
    <div className={styles.body}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <img
              className={styles.logo}
              alt="Github Logo"
              src="/images/github-logo.png"
            />
            <Search />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
