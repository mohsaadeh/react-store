import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../style/style.css';

const HeaderComponent = () => {
  return (
    <Row className="header-component">
    <Col xs={6} className="text-start">Free shipping, 30-day return or refund guarantee.</Col>
    <Col xs={6} className="text-end">
      <a href='#'> Sign In</a>
      <a href='#'>Faqs</a>
      <a href='#'>Usd</a>
    </Col>
  </Row>
  );
};

export default HeaderComponent;