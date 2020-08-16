import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? "menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            Dashboard
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            Profile
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Opportunities</MenuItem>
          <MenuItem onClick={this.handleClose}>About WeCreate MN</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
