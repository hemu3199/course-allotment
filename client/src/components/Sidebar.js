import React from "react";
import { Link } from "react-router-dom";

// Sidebar
const Sidebar = () => {
  // JSX
  return (
    <div className="Rowstart grid_fourth Page">
      <div className="grid_inner">
        <nav
          className="navigation-side"
          aria-label="Site Navigation"
          role="navigation"
        >
          <div className="skip-nav">
            <a href="#ContentColumn" className="item hidden">
              Skip to content column
            </a>
          </div>
          <button
            id="toggle"
            className="toggle"
            aria-expanded="false"
            aria-controls="container"
          >
            <span className="headline">Menu</span>
            <svg
              className="arrow"
              width="16"
              height="11"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.12 0.786666667L8 6.89333333 1.88 0.786666667 0 2.66666667 8 10.6666667 16 2.66666667z"
              />
            </svg>
          </button>
          <div id="container" className="container">
            <div className="global">
              <nav className="navigation" aria-label="navigation">
                <div className="nav-section">
                  <h2 className="headline">
                    Computer Science Graduate Course Registration
                  </h2>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Courses">Courses available</Link>
                    </li>
                    <li>
                      <Link to="/Estimate">Estimated courses</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="widget">
              <nav className="navigation social-nav" aria-label="Navigation">
                <div className="nav-section">
                  <h2 className="headline">Additional Links</h2>
                  <ul>
                    <li>
                      <a
                        href="https://developers.omniupdate.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Omni API Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </nav>
        <script
          async
          src="https://missouristate.info/msuwds/v2/scripts/components/side-nav.js"
        ></script>
      </div>
    </div>
  );
};

// Export
export default Sidebar;
