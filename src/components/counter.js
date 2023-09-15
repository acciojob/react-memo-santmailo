import React,{useState} from "react";


const Counter = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count+1);
    }
    return (
        <div>
            <h1>Counter</h1>
            <span>Count: {count}&nbsp;&nbsp;&nbsp;</span><button onClick={increaseCount}>+</button>
        </div>
    )
}

export default Counter;