// const HelloWorld = () => {
//   return <div>Hello, world</div>;
// };

// /* const Greeting = () => {
//   const name = "Akash";
//   return <div>Hello, {name}</div>;
// }; */

// const Greeting = () => {
//   const isLoggedIn = false;
//   return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please Log In</p>}</div>;
// };

// export const StyledComponent = () => {
//   return (
//     <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
//       <p>This Component has Inline Styling</p>
//     </div>
//   );
// };

// export const ButtonComponent = () => {
//   const handleClick = () => {
//     console.log("Button Clicked");
//   };

//   return <button onClick={handleClick}>Click Me</button>;
// };
// // export default Greeting;

import Navbar from "./bootstrap/Navbar";
import Sidebar from "./bootstrap/Sidebar";
import MainContent from "./bootstrap/MainContent";
import Footer from "./bootstrap/Footer";

const App = () => {
  return (
    <div className="container  mt-5">
      <Navbar />
      <div className="d-flex justify-content-center">
        <Sidebar />
        <MainContent />
      </div>

      <Footer />
    </div>
  );
};

export default App;
