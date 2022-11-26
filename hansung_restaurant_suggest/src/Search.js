import React, { Component } from 'react';
import './App.css';
import Restaurant from './restaurant-json';
import { Route } from 'react-router-dom';


class App extends Component {

  constructor() {
    super();

    this.state= {
      search:null
    };
  }

    searchSpace = (event) => {
      let keyword = event.target.value;
      this.setState({search:keyword})
    }


  render() {
    const styleInfo = {
      paddingRight : '10px'
    }

    const elementStyle = {
      border : 'solid',
      borderRadius: '10px',
      position : 'relative',
      left : '10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }



    const items = Information.filter((data) => {
      if(this.state.search == null)
        return data
      
      else if (data.restaurant.toLowerCase().includes(this.state.search.toLowerCase()) || data.menu.toLowerCase().includes(this.state.search.toLowerCase()))
        return data
    }
  ).map(data => {
    return (
      <div>
        <ul>
          <li style={{position:'relative', left : '10vh'}}>
            <span style = {styleInfo}>{data.restaurant}</span>
            <span style = {styleInfo}>{data.menu}</span>
          </li>
        </ul>
      </div>
    )
  })

    return (
      <div>
      <input type="text" placeholder="검색어를 입력해주세요" style = {elementStyle} onChange={(e)=> this.searchSpace(e)} />
      {items}
      </div> 
    )

  }
}
  
  export default App;
