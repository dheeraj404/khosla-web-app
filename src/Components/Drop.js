import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Drop extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }

  render() {
    return (
      <Dropdown ref={this.dropdownRef}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select an option
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default Drop;
