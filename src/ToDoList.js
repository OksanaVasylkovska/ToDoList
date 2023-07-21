import { Component } from "react";
import hourglass from './hourglass.png'

export class ToDoList extends Component {
  state ={
    userInput: "",
    toDoList:[]
  }

  OnChangeEvent(e){
    this.setState ({userInput:e})
  }

  addItem(input){
    if(input === ''){
      alert("Please enter an item")
    } else{
    let listArray = this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList: listArray, userInput: ""})
  }}

  deleteItem(){
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})
  }

crossedWord(event){
  const li = event.target;
  li.classList.toggle ('crossed');
}

onFormSubmit(e) {
  e.preventDefault();
}


  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
        <div  className="container">
          <input  type="text" placeholder="What are you plans for day?"
        onChange={(e) => {this.OnChangeEvent(e.target.value)}}
        value ={this.state.userInput}/>
        </div>
        <div className="container">
          <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
        </div>
        <ul>
          {this.state.toDoList.map((item,index) =>(
            <li onClick = {this.crossedWord} key={index}>
              <img src={hourglass} width="30px" alt="hourglass"/>
              {item}</li>
          )
          )}
        </ul>
        <div className="container">
          <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
        </div>
        </form>
      </div>
    )
  }
}