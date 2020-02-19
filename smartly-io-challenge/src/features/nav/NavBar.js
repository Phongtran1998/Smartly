import React from "react";
import { Menu, Button } from "semantic-ui-react";

const NavBar = ({ handleFetchCats, header, buttonText }) => {
  return (
    <Menu inverted>
      <Menu.Item header>{header}</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button positive onClick={() => handleFetchCats()}>
            {buttonText}
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
