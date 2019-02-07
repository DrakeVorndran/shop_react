import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

import CategoryButton from './CategoryButton'
import Item from './Item';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: [],
    }
    console.log(this.state.colors)

    const step = 360 / categories.length
    this.colors = []
    for (let i = 0; i < 360; i += step) {
      this.colors.push(`hsl(${i}, 50%, 70%)`)
    }
    console.log(this.colors)

  }

  getCategories() {
    return categories.map((cat) => <li className="category-item" key={cat}><CategoryButton state={this.state.categories} cat={cat} onClick={() => this.handleClick(cat)} color={pastelColors[categories.indexOf(cat)%pastelColors.length]} /></li>)
  }


  handleClick(cat) {
    let currentList = this.state.categories
    // const catList = this.state.categories.includes(cat)? this.state.categories.splice(this.state.categories.indexOf(cat),1) : this.state.categories.concat(cat) 
    if(currentList.includes(cat)){
      currentList.splice(currentList.indexOf(cat),1);
      console.log('remove')
    }
    else{
      currentList = currentList.concat(cat);
      console.log(currentList)

    }
    this.setState({categories: currentList})
  }

  getInventory() {
    const items = inventory.filter((item) => {
      return  this.state.categories.includes(item.category) || this.state.categories.length === 0;
    })
    return items.map((item) => {
      return (
        <li key={item.id}>
        <Item item={item} color={this.colors[categories.indexOf(item.category)%this.colors.length]}/>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="App">

        <h1>Reactive item shop</h1>

        <ul className="categories">
          {this.getCategories()}
        </ul>

        <ul className="items">
          {this.getInventory()}
        </ul>

      </div>
    );
  }
}

export default App;
