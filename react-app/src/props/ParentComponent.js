import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  //   const data = {
  //     message: "Hello From Parent",
  //     count: 30,
  //   };

  const person = "umesh";
  const age = 30;

  return (
    <div>
      <ChildComponent Name={person} age={age} />
    </div>
  );
};

export default ParentComponent;
