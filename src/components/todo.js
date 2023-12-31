import React,{useState} from "react";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    // const [todo, setTodo] = useState("");

    const addTodo = (e) => {
        setTodo(e.target.value);
    }

    const addTodoList = () => {
        // setTodoList([...todoList, <p key={todoList.length+1}>New todo</p>]);
        setTodoList([...todoList, <li key={todoList.length+1}>new todo</li>]);
    }   

    return (
        <div>
            <h1>Todo</h1>
            {/* <input type="text" onChange={addTodo} value={todo} /> */}
            <ol>
                {todoList}  
            </ol>
            <button onClick={addTodoList}>Add Todo</button> 
        </div>
    )
}

export default Todo;