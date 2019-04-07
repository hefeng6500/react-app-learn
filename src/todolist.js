import React, { Component, Fragment } from "react";
import store from "./store";

import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

class todilist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  render() {
    const data = this.state.list;
    return (
      <Fragment>
        <Input
          value={this.state.inputValue}
          onChange={this.handleChange}
          style={{ width: 300, marginRight: 10 }}
        />
        <Button type="primary" onClick={this.handleAdd}>
          提交
        </Button>
        <List
          style={{ width: 300, marginTop: 10 }}
          size="small"
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
        <hr></hr>
        <img style={{width: 1000}} src={require("./static/images/todolist.js.png")} alt=""/>
        <img style={{width: 1000}} src={require("./static/images/reducer.js.png")}  alt=""/>
      </Fragment>
    );
  }

  handleChange = e => {
    const value = e.target.value;
    const action = {
      type: "input_change",
      value: value
    };
    store.dispatch(action);
  };

  handleStoreChange = () => {
    this.setState(() => {
      return store.getState();
    });
  };

  handleAdd = () => {
    if (store.getState().inputValue === "") {
      return;
    }
    const action = {
      type: "input_add"
    };
    store.dispatch(action);
  };

  handleDelete(index) {
    const action = {
      type: "delete_list_item",
      index: index
    };
    store.dispatch(action);
  }
}

export default todilist;
