import { useState } from "react";

function AddTodo({updateList}){
    
    const [inputText, setInputText] = useState('');

    return(
        <>
        <input 
        type="text"
        value={inputText}
        placeholder = "Add your next Todo"
        onChange={ e => setInputText(e.target.value)}/>
        <button onClick={() =>{ 
            updateList(inputText)
            setInputText("")
        }}>Add</button>
        </>
    )
}
export default AddTodo;