// prop drilling => passing data from parent component to deeply nested child component
// code complexity 
// useContext
const App = () =>{
    const user = {name: 'vickram', age: 25}

    return <ParentComponent user={user}/>
  
}


const ParentComponent = ({user}) =>{
    return  <ChildComponent user={user} />


}

const ChildComponent = ({user}) =>{
    return <GrandChildComponent user={user} />


}

const GrandChildComponent = ({user}) =>{
    return <div>User Name : {user.name}</div> 

}

export default App;