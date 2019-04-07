import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import { connect } from "react-redux";

import store from "./store";
import {
  getInputChangeAction,
  getInputAddAction,
  deleteAction
} from "./store/actionCreator";

class TodoList extends Component {
  render() {
    const {
      inputValue,
      list,
      handleInputChange,
      handleAdd,
      handleDelete
    } = this.props;
    return (
      <Fragment>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: 300, marginRight: 10 }}
        />
        <Button type="primary" onClick={handleAdd}>
          提交
        </Button>
        <List
          style={{ width: 300, marginTop: 10 }}
          size="small"
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={handleDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const value = e.target.value;
      const action = getInputChangeAction(value);
      store.dispatch(action);
    },
    handleAdd() {
      if(!store.getState().inputValue){
        return
      }
      const action = getInputAddAction();
      store.dispatch(action);
    },
    handleDelete(index) {
      console.log(index);
      const action = deleteAction(index);
      store.dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
