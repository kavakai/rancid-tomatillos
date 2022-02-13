import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css'
import './Sidebar.css';
import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: '',
      dateInput: '',
      ratingInput: '',
      menuCollapse: false,
    }
    // console.log('WhatIsThis')
  }

  handleChange = (event) => {
    console.log('HC', event.target.name)
    this.setState({ [event.target.name]: event.target.value });
    // this.searchTitle(event);
    console.log(this.state, 'state in sidebar')
  }
  
  searchTitle = (event) => {
    console.log('ST', event.target.value)
    console.log(this.state[event.target.name], 'text in sidebar comp')
    event.preventDefault()
    this.props.filterByTitle(this.state)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({textInput: '', dateInput: '', ratingInput: ''})
  }

  collapseMenu = () => {
    this.state.menuCollapse ? this.setState({menuCollapse: false}) : this.setState({menuCollapse: true})
  }

  render() {
    return (
      // <aside className='sidebar'>
          <ProSidebar collapsed={this.state.menuCollapse} onToggle={() => this.collapseMenu}>
            {/* <SidebarHeader>Search</SidebarHeader> */}
            <SidebarContent>
              <Menu iconShape="round" popperArrow= {true}>
                <form>
                  <SubMenu title="Search By Title">
                    <MenuItem>
                      <input
                        type="text"
                        placeholder="Title"
                        name="textInput"
                        value={this.state.textInput}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </MenuItem>
                  </SubMenu>
                  <SubMenu title="Search By Release Date">
                  <MenuItem>
                    <input
                      type="month"
                      name="dateInput"
                      value={this.state.dateInput}
                      onChange={(event) => this.handleChange(event)} 
                    />
                  </MenuItem>
                  </SubMenu>
                  <SubMenu title="Search by Rating">
                    <MenuItem>
                      <input 
                        type="radio" 
                        name="ratingInput" 
                        value={1} 
                        onChange={(event) => this.handleChange(event)} 
                      />
                      <lable>⭐️</lable>
                    </MenuItem>
                    <MenuItem>
                      <input 
                        type="radio" 
                        name="ratingInput" 
                        value={2} 
                        onChange={(event) => this.handleChange(event)} 
                      />
                      <lable>⭐️⭐️</lable>
                    </MenuItem>
                    <MenuItem>
                      <input 
                        type="radio" 
                        name="ratingInput" 
                        value={3} 
                        onChange={(event) => this.handleChange(event)} 
                      />
                      <lable>⭐️⭐️⭐️</lable>
                    </MenuItem>
                    <MenuItem>
                      <input 
                        type="radio" 
                        name="ratingInput" 
                        value={4} 
                        onChange={(event) => this.handleChange(event)} 
                      />
                      <lable>⭐️⭐️⭐️⭐️</lable>
                    </MenuItem>
                    <MenuItem>
                      <input 
                        type="radio" 
                        name="ratingInput" 
                        value={5}
                        onChange={(event) => this.handleChange(event)} 
                      />
                      <lable>⭐️⭐️⭐️⭐️⭐️</lable>
                    </MenuItem>
                  </SubMenu>
                </form>
                <button onClick={(event) => this.searchTitle(event)}>SUBMIT</button>
              </Menu>
            </SidebarContent>
        </ProSidebar>
      // </aside>
    )
  }
};

export default Sidebar;