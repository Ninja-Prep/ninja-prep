import React from "react"
import { Row, Col } from "react-bootstrap"
import "./discover.css"
import {
  DISCOVER_PLAIN_TEXT,
  DISCOVER_INDEMAND_CONCEPTS,
} from "./DiscoverStringIds"

const DiscoverMobile = () => (
  <div className="text-center px-5 pt-5 container">
    <Row className="pt-3">
      <Col className="my-auto col-12">
        <img
          className="img-fluid w-50"
          src="./images/Explore-Cards.png"
          alt="Explore Cards"
        />
      </Col>
      <Col className="my-auto col-12">
        <h1 className="font-weight-bold discover-text display-5 pt-2  pb-2 ">
          {DISCOVER_PLAIN_TEXT}
        </h1>
        <p className="lead text-secondary m-auto">
          {DISCOVER_INDEMAND_CONCEPTS}
        </p>
      </Col>
    </Row>
  </div>
)

export default DiscoverMobile
export { default as DiscoverMobile } from "./DiscoverMobile"
