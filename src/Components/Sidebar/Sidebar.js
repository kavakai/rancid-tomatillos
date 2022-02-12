import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import './Sidebar.css';
import React, { Component } from 'react';

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      textInput: '',
      dateInput: '',
      ratingInput: ''
    }
  }

  handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

  render() {
    return (
      <ProSidebar>
        <SidebarHeader>Search</SidebarHeader>
        <Menu iconShape="round">
          <form>
            <input
              type="text"
              placeholder="Title"
              name="textInput"
              value={this.state.textInput}
              onChange={(event) => this.handleChange(event)}
            />
          </form>
          {/* <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu> */}
        </Menu>
    </ProSidebar>
    )
  }
};

export default Sidebar;