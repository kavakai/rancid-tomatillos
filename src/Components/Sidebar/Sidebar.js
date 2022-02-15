import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import './Sidebar.css';
import searchIcon from '../../assets/searching.png';
import searchReel from '../../assets/searchIcon.png';
import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: '',
      dateInput: '',
      ratingInput: '',
      menuCollapse: true,
    }
    // console.log('WhatIsThis')
  }

  handleChange = (event) => {
    // console.log('HC', event.target.name)
    this.setState({ [event.target.name]: event.target.value });
    // this.searchTitle(event);
    // console.log(this.state, 'state in sidebar')
  }
  
  searchTitle = (event) => {
    // console.log('ST', event.target.value)
    // console.log(this.state[event.target.name], 'text in sidebar comp')
    event.preventDefault()
    this.props.filterMovies(this.state)
    this.clearInput(event)
  }

  clearInput = (event) => {
    event.preventDefault()
    this.setState({ textInput: '', dateInput: '', ratingInput: '' })
    // this.props.clearFiltered()
  }

  collapseMenu = () => {
    this.state.menuCollapse ? this.setState({ menuCollapse: false }) : this.setState({ menuCollapse: true })
    // const submitBtn = document.querySelector('.submit');
    // submitBtn.classList.toggle('hide')
  }


  render() {
    return (
      <aside className="sidebar">
        <button onClick={this.collapseMenu}>
          <img className="searchIcon" src={searchIcon} alt="Search Icon"/></button>
        <ProSidebar collapsed={this.state.menuCollapse}>
          <SidebarHeader>Search All Movies</SidebarHeader>
          <SidebarContent>
            <Menu>
                <form>
              <MenuItem>
                <input
                  className="input"
                  type="text"
                  placeholder="Movie Title"
                  name="textInput"
                  value={this.state.textInput}
                  onChange={(event) => this.handleChange(event)}
                />
              </MenuItem>
              <button className='submit' onClick={(event) => this.searchTitle(event)}><img className="searchReel" src={searchReel} alt="Search Reel Icon"/>Search</button>
              <MenuItem>
                  <input
                  className="input"  
                  type="month"
                  name="dateInput"
                  max={"2022-02"}
                  value={this.state.dateInput}
                  onChange={(event) => this.handleChange(event)} 
                />
              </MenuItem>
              <button className='submit' onClick={(event) => this.searchTitle(event)}><img className="searchReel" src={searchReel} alt="Search Reel Icon"/>Search</button>
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
                </form>
                <button className='submit' onClick={(event) => this.searchTitle(event)}><img className="searchReel" src={searchReel} alt="Search Reel Icon" />Search</button>
              <button className='submit clear' onClick={this.props.clearFiltered}><img className="searchReel" src={searchReel} alt="Search Reel Icon"/>See All Movies</button>
            </Menu>
          </SidebarContent>
      </ProSidebar>
    </aside>
    )
  }
};

export default Sidebar;