import { Button, Col, Row } from "antd";
import React, { Children } from "react";
import "./index.scss";

const PageLayout = ({ children, buttons }) => {
  return (
    <Row className="pageLayout">
      <Col>
        <Row>
          <Col flex="auto">Search</Col>
          <Col>
            {buttons.map((button) => {
              const { key, text, type, ...otherProps } = button;
              return (
                <Button key={key} {...otherProps}>
                  {text}
                </Button>
              );
            })}
          </Col>
        </Row>
      </Col>
      <Col>{children}</Col>
    </Row>
  );
};

export default PageLayout;
