import { Link } from "react-router-dom";

function Navigation() {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/about">About</a>
    //     </li>{" "}
    //     <li>
    //       <a href="/services">Services</a>
    //     </li>{" "}
    //     <li>
    //       <a href="/contact">Contact</a>
    //     </li>
    //   </ul>
    // </nav>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
