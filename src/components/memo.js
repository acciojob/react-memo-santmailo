import React,{useState} from "react";

const Memo = () => {
    const [memoList, setMemoList] = useState([]);
    const [memo, setMemo] = useState("");

    const addMemo = (e) => {
        setMemo(e.target.value);
    }

    const addMemoList = () => {
        if(memo.length>4){
            setMemoList([...memoList, <li key={memoList.length+1}>{memo}</li>]);
        }
    }

    const showMemoList = () => {
        if(memo.length<5){
            return <p style={{color: "red"}}>memo should be of atleast 5 character</p>
        }
        return <ul>{memoList}</ul>
    }   

    return (
        <div>
            <h1>Memo</h1>
            <input type="text" onChange={addMemo} value={memo} />
            <button onClick={addMemoList}>Add Skill</button>
            { showMemoList() }
        </div>
    )
}

export default Memo;