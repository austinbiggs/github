import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "./home/style.m.scss";

const Home = () => {
  return (
    <Page name="Home">
      <div className={styles.body}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <></>
            </Col>
          </Row>
        </Container>
      </div>
    </Page>
  );
};

export default Home;
