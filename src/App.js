
import './App.css';
import { ToDoList } from './ToDoList';
import image from './list.jpg';
import imageTwo from './done.jpg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={image} width="200px" alt="checklist"/>
      </div>
      <div>
        <h1  className="container">TO DO LIST</h1>
      </div>
      <div>
        <ToDoList />
      </div>
      <div className="container">
        <img src={imageTwo} width="200px" alt="checklist"/>
      </div>
    </div>
  );
}

export default App;
