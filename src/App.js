import React, { Component } from 'react';
import Header from './Header.js';
import CompletedSection from './CompletedSection.js';
import './App.css';
import { List } from './List';

class App extends Component {
  state = {
    list: [{
      title: 'Task 1',
      isCompleted: true,
    }, {
      title: 'Task 2',
      isCompleted: false,
    }, {
      title: 'Task 3',
      isCompleted: false,
    }, {
      title: 'Task 4',
      isCompleted: true,
    }],
    showCompleted: false,
  };

  handleChangeToggle = (event) => {
    const { checked, id } = event.target

    this.state.list[id].isCompleted = checked
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }

  handleChangeTitle = (event) => {
    const { value, id } = event.target
    this.state.list[id].title = value
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }

  handleAdd = () => {
    this.setState({
      list: [
        ...this.state.list,
        { title: "", isCompleted: false }
      ]
    })
  }

  handleDelete = (event) => {
    const { id } = event.target // get id
    this.state.list.splice(id, 1) // delete
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }

  render() {
    const completed = [];
    const uncompleted = [];

    this.state.list.filter((item,index) => {
      if (item.isCompleted === true) {
        completed.push({...item,index});
      } else {
        uncompleted.push({...item,index});
      }
    })
    return (
      <div className="App col-lg-6">
        <Header handleAdd = {this.handleAdd} />
        <CompletedSection  list={completed}
        handleChangeToggle={this.handleChangeToggle}
        handleChangeTitle={this.handleChangeTitle}
        handleDelete={this.handleDelete} />
      <List
       list={uncompleted}
       handleChangeToggle = {this.handleChangeToggle}
       handleChangeTitle={this.handleChangeTitle}
       handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App;
