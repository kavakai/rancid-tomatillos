import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import './Sidebar.css';
import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: '',
      dateInput: '',
      ratingInput: '',
    }
  }

  handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
  }
  
  seachTitle = (event) => {
    event.preventDefault()
    this.props.filterByTitle(this.state.textInput)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({textInput: ''})
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
          <button onClick={(event) => this.seachTitle(event)}>SUBMIT</button>
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