import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";

export default class todoUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Input
          placeholder="请输入"
          style={{ width: "240px", margin: "10px" }}
          onChange={this.props.changeInputValue}
          value={this.props.inputValue}
        ></Input>
        <Button type="primary" onClick={this.props.addValue}>
          Add
        </Button>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  this.props.removeItem(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    );
  }
}
