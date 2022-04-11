import "./Nav.css";
import logo from "./logo.png";
import React from "react";

function Nav(props: any) {
  // functionality
  // const [data, setData] = useState(null);

  // useEffect(async () => {
  //   const a = await fetch("/api/home");
  //   const b = await a.json();
  //   await setData(b);
  // }, []); //end useEffect
  const data = props.data;
  // end functionality
  return (
    <div>
      <nav
        id="navbarSupportedContent"
        className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
      >
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="115" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {data?.nav.map((item: any, index: number) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={`#${item.toLowerCase()}`}>
                  {/* <a className="nav-link" href="#home"> */}
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
