import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./home/style.m.scss";

const Home = () => {
  return (
    <div className={styles.body}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <></>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
