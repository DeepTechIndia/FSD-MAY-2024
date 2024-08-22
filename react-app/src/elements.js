// const element = React.createElement("h1", "null", "Hello, Guys!");
// JSX => javascript XML => HTML X = JS

// const jsxElement = <div>Hello World</div>;

const name = "Varun";
// const element = <p>Hello, {name}</p>;

const numbers = ["list1", "list2", "list3", "list4"];

const listItems = numbers.map((number) => <li>{number}</li>);

const listElements = <ul>{listItems}</ul>;

const element = (
  <div>
    <h1>Title</h1>
    <p>paragraph</p>
  </div>
);

const isLoggedIn = false;
const element1 = (
  <div>{isLoggedIn ? <p>Welcome, User!</p> : <p>Please LogIn</p>}</div>
);
