import React from "react";

import { Dropdown } from "react-bootstrap";

const CustomDropdown = props => {
  function handleClick(e) {
    if(props.clickHandler){
      props.clickHandler(e.currentTarget.innerText);
    }
  }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {props.title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.options
            ? props.options.map((item, key) => {
                return (
                  <Dropdown.Item key = {key} onClick={handleClick}>{item}</Dropdown.Item>
                );
              })
            : null}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
