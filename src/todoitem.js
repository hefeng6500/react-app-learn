import React, { Component, Fragment } from "react";


class todoitem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { content } = this.props
    return (
      <Fragment>
        <li onClick={this.props.deleteItem}>
          {content}
        </li>
      </Fragment>
    );
  }
}

export default todoitem;