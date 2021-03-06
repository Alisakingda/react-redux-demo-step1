// const defaultState = {
//   inputValue: 'Write Something',
//   list: [
//     '早上4点起床，锻炼身体',
//     '中午下班游泳一小时'
//   ]
// }  //默认数据
// export default (state = defaultState, action) => {  //就是一个方法函数
//   return state
// }
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "Write Something",
  list: []
};

export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === CHANGE_INPUT) {
    // Object.assgin()
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState; // 程序退出并返回
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue === "") return newState;
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list;
    return newState;
  }
  return state;
};
