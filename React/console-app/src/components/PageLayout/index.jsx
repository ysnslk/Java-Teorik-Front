import { Button, Col, Row, Input } from "antd";
import React from "react";
import "./index.scss";
const { Search } = Input;

const PageLayout = ({ children, buttons, onSearch }) => {
  const handleSearch = (value) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <Row className="pageLayout">
      <Col>
        <Row>
          <Col flex="auto">
            {onSearch && (
              <Search
                placeholder="Search"
                onSearch={handleSearch}
                enterButton
                style={{ width: 304 }}
              />
            )}
          </Col>
          <Col>
            {buttons.map((button) => {
              const { key, text, ...otherProps } = button;
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
