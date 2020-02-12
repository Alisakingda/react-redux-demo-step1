import React, { Fragment } from "react";
import { Input, Button, List } from "antd";

const NoState = props => {
  return (
    <Fragment>
      <Input
        placeholder="请输入"
        style={{ width: "240px", margin: "10px" }}
        onChange={props.changeInputValue}
        value={props.inputValue}
      ></Input>
      <Button type="primary" onClick={props.addValue}>
        Add
      </Button>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.removeItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </Fragment>
  );
};

export default NoState;
