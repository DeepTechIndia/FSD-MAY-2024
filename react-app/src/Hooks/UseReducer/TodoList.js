import { useState, useReducer } from "react"



function reducer(state, action){
    switch(action.type){
        case "ADD_TODO":
            return [...state, {id:Date.now(), text:action.payload}]

        case "REMOVE_TODO":
                return state.filter((todo)=> todo.id !== action.payload)

        default:
            return state
    
    }
}

function TodoList() {

    const [todos, dispatch] = useReducer(reducer, [])
    const [inputValue, setInputvalue] = useState("")


    const handleAddTodo = () =>{
        if(inputValue.trim() !== ""){
            dispatch({type :"ADD_TODO", payload : inputValue })
            setInputvalue("")
        }
        
    }


 const handlleRemoveTodo = (id) =>{
    dispatch({type:"REMOVE_TODO", payload:id})
 }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputvalue(e.target.value)} placeholder="Enter  a todo" />
            <button onClick={handleAddTodo}>Add todo </button>

            <ul>
                {todos.map((todo) =>(
                    <li key={todo.id}>{todo.text}  <button onClick={()=> handlleRemoveTodo(todo.id)}>Remove</button></li>
                   
                ))}
            </ul>

        </div>
    )
}


export default TodoList