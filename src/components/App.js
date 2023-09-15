import React from "react";
import Todo from "./todo"
import Counter from "./counter"
import Memo from "./memo"


const App = () => {
    return (
        <div id="main">
            <Todo />
            <hr />
            <Counter />
            <hr />  
            <Memo />
        </div>
    )
}

export default App;


