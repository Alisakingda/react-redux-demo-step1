// import React, { Component, Fragment } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       <Fragment>

//       </Fragment>
//     )
//   }
// }

import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
// import { Input, Button, List } from "antd";
import store from "./store/index";
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./store/actionTypes";
// import UI from "./todoUI";
import NoState from "./noState";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getList
} from "./store/actionCreators.js";
import axios from "axios";

export default class App extends Component {
  componentDidMount() {
    // axios
    //   .get(
    //     "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
    //   )
    //   .then(res => {
    //     console.log(res);
    //     const action = getList(res.data);
    //     store.dispatch(action);
    //   });

    setTimeout(() => {
      let data = {
        data: {
          list: ["早上4点起床，锻炼身体", "中午下班游泳一小时222"]
        }
      };
      const action = getList(data);
      store.dispatch(action);
    }, 2000);
  }
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.addValue = this.addValue.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  storeChange() {
    this.setState(store.getState);
  }

  changeInputValue(e) {
    // console.log(e.target.value);
    // let action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // };
    let action = changeInputAction(e.target.value);
    store.dispatch(action); // dispatch 一个action;
  }
  addValue() {
    let action = addItemAction();
    store.dispatch(action);
  }
  removeItem(index) {
    // console.log(index);
    let action = deleteItemAction(index);
    store.dispatch(action);
  }

  render() {
    return (
      <Fragment>
        {/* <UI
          inputValue={this.state.inputValue}
          list={this.state.list}
          changeInputValue={this.changeInputValue}
          addValue={this.addValue}
          removeItem={this.removeItem}
        ></UI> */}
        <NoState
          inputValue={this.state.inputValue}
          list={this.state.list}
          changeInputValue={this.changeInputValue}
          addValue={this.addValue}
          removeItem={this.removeItem}
        ></NoState>
        {/* <Input
          placeholder="请输入"
          style={{ width: "240px", margin: "10px" }}
          onChange={this.changeInputValue}
          value={this.state.inputValue}
        ></Input>
        <Button type="primary" onClick={this.addValue}>
          Add
        </Button>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.removeItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div> */}
      </Fragment>
    );
  }
}
