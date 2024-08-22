import ChildComponent from "./ChildComponent"

const ParentComponent = () =>{
    const dataToPass = "Hello From the parent"

return(
    <div>
        <ChildComponent data={dataToPass} />
    </div>
)
}

export default ParentComponent


// [passing data ]

// passing data to the nested component
