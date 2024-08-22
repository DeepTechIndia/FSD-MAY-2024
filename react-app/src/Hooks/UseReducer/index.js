import { useReducer } from "react"



const countrReducer = (state, action) =>{

    switch (action.type){
        case 'INCREMENT':
            return{count : state.count + 1};

        case 'DECREMENT':
            return{count : state.count - 1};

        case 'RESET':
            return{count : 0};

        default:
            return state;
    }
    
}


const Counter = () =>{
    const [state, dispatch] = useReducer(countrReducer, {count:0})


    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>Incerement</button>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}

export default Counter