// props => properties
// pass data from one component to another component
// parent component to child component
// props are immutable

// const Greet = () => {
//   return <Greeting user_name="Shankar" />;
// };

// const Greeting = (props) => {
//   return <div>Hello, {props.user_name}</div>;
// };
/* 
const App = () => {
  const items = ["Apple", "Banana", "Orange"];

  const handleClick = (item) => {
    alert(`You clicked on ${item}`);
  };
  return (
    <div>
      {items.map((item, index) => (
        <LisItem item={item} onItemClick={handleClick} />
      ))}
    </div>
  );
};

const LisItem = (props) => {
  return <div onClick={() => props.onItemClick(props.item)}>{props.item}</div>;
};

export default App; */




