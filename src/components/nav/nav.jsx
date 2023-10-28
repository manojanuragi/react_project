import "./nav_style.css";

function NavBar() {
  return (
    <div className="nav">
      <ul id="list">
        <li>
          <a href="./App.js">Men</a>
        </li>
        <li>
          <a href="./App.js">Sale</a>
        </li>
        <li>
          <a href="./App.js">Women</a>
        </li>

        <div className="log">
          <button>login</button>
        </div>
      </ul>
    </div>
  );
}
export default NavBar;
