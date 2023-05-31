import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (Text) => {
    setListTodo([...listTodo,Text]);
  };

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
   
    <div className="mainContainer">
    <br></br>
      <div className="centreContainer">
        <TodoForm addList={addList} />
        <hr/>
        {listTodo.map((ListItem,i) => {
          return (<TodoList key={i} index={i} item={ListItem} deleteItem={deleteListItem}/>);
        })}
      </div>
    </div>
  );
}

export default App;
