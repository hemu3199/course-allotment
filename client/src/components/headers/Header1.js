// Header
import { useState } from 'react';
const Header1 = () => {
  // JSX
  const [loginClass, setLoginClass] = useState('');
  const [indexClass, setIndexClass] = useState('IndexControl');
  const [siteDict, setSiteDict] = useState({});
  const [showlogin, setShowLogin] = useState(false);
  const [showIndex, setShowIndex] = useState(false);
  const [showBar, setShowBar] = useState('');

  const handleClick = (event) => {
    console.log('Hello');
    let name = event.target.className;
    if (!Boolean(name)) {
      setLoginClass('Selected');
      setIndexClass('IndexControl');
      setShowLogin(true);
      setShowIndex(false);
      setShowBar('Shown');
      setSiteDict({ height: '44px', overflow: 'visible' });
    } else if (name === 'IndexControl') {
      setIndexClass('IndexControl Selected');
      setLoginClass('');
      setShowIndex(true);
      setShowLogin(false);
      setShowBar('Shown');
      setSiteDict({ height: '44px', overflow: 'visible' });
    } else if (name === 'Selected') {
      setSiteDict({});
      setShowIndex(true);
      setShowLogin(false);
      setShowBar('');
      setLoginClass('');
    } else {
      setSiteDict({});
      setShowIndex(true);
      setShowLogin(false);
      setShowBar('');
      setIndexClass('IndexControl');
    }
  };

  return (
    <>
      <header data-msutemplate="masthead" id="Masthead">
        <div id="MastheadInner">
          <div className="Logo">
            <div>
              <a href="https://www.missouristate.edu/">
                <img
                  alt="Missouri State University"
                  src="https://missouristate.info/ou/_resources/svg/sgf-logo.svg"
                  height="153"
                />
              </a>
            </div>
          </div>
          <div className="utility">
            <div className="skip-nav">
              <a className="item hidden" href="#PageInnerWrapper">
                Skip to content
              </a>
              <a className="item hidden" href="#MainNav">
                Skip to navigation
              </a>
            </div>
            <nav aria-label="Top menu">
              <div id="MastheadControls">
                <div className="BearPass">
                  <button className={loginClass} onClick={handleClick}>
                    Log in
                  </button>
                </div>
                <div className="SiteIndex">
                  <button className={indexClass} onClick={handleClick}>
                    A-Z
                  </button>
                </div>
                <div></div>
                <div className="Search">
                  <form
                    action="https://search.MissouriState.edu/"
                    itemProp="potentialAction"
                    itemScope=""
                    itemType="https://schema.org/SearchAction"
                    method="get"
                  >
                    <meta
                      content="https://search.MissouriState.edu/?q={q}"
                      itemProp="target"
                    />
                    <label htmlFor="Keywords" className="visually-hidden">
                      <img
                        alt="Enter keyword:"
                        height="1"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        width="1"
                      />
                      Search
                    </label>
                    <input
                      id="Keywords"
                      itemProp="query-input"
                      name="q"
                      placeholder="Search"
                      type="search"
                    />
                    <label htmlFor="Go" className="visually-hidden">
                      <input
                        name="Go"
                        id="Go"
                        alt="Go"
                        height="1"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        type="image"
                        width="1"
                      />
                      Go
                    </label>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <nav
        aria-label="Site index menu"
        id="SearchContainer"
        className={showBar}
        style={siteDict}
      >
        {showlogin && (
          <div className="BearPassLogin">
            <ul>
              <li>
                <a href="https://my.missouristate.edu/">My Missouri State</a>
              </li>
              <li>
                <a href="https://portal.office.com">Office 365 and Email</a>
              </li>
              <li>
                <a href="https://blackboard.missouristate.edu/webapps/login/">
                  Blackboard Learn
                </a>
              </li>
              <li>
                <a href="https://organizations.missouristate.edu/login">
                  BearLink
                </a>
              </li>
            </ul>
          </div>
        )}
        {showIndex && (
          <div className="SiteIndex">
            <a href="https://search.MissouriState.edu/siteindex/a">a</a>
            <a href="https://search.MissouriState.edu/siteindex/b">b</a>
            <a href="https://search.MissouriState.edu/siteindex/c">c</a>
            <a href="https://search.MissouriState.edu/siteindex/d">d</a>
            <a href="https://search.MissouriState.edu/siteindex/e">e</a>
            <a href="https://search.MissouriState.edu/siteindex/f">f</a>
            <a href="https://search.MissouriState.edu/siteindex/g">g</a>
            <a href="https://search.MissouriState.edu/siteindex/h">h</a>
            <a href="https://search.MissouriState.edu/siteindex/i">i</a>
            <a href="https://search.MissouriState.edu/siteindex/j">j</a>
            <a href="https://search.MissouriState.edu/siteindex/k">k</a>
            <a href="https://search.MissouriState.edu/siteindex/l">l</a>
            <a href="https://search.MissouriState.edu/siteindex/m">m</a>
            <a href="https://search.MissouriState.edu/siteindex/n">n</a>
            <a href="https://search.MissouriState.edu/siteindex/o">o</a>
            <a href="https://search.MissouriState.edu/siteindex/p">p</a>
            <a href="https://search.MissouriState.edu/siteindex/q">q</a>
            <a href="https://search.MissouriState.edu/siteindex/r">r</a>
            <a href="https://search.MissouriState.edu/siteindex/s">s</a>
            <a href="https://search.MissouriState.edu/siteindex/t">t</a>
            <a href="https://search.MissouriState.edu/siteindex/u">u</a>
            <a href="https://search.MissouriState.edu/siteindex/v">v</a>
            <a href="https://search.MissouriState.edu/siteindex/w">w</a>
            <a href="https://search.MissouriState.edu/siteindex/x">x</a>
            <a href="https://search.MissouriState.edu/siteindex/y">y</a>
            <a href="https://search.MissouriState.edu/siteindex/z">z</a>
          </div>
        )}
      </nav>
    </>
  );
};

// Export
export default Header1;
