// Header
import { useState } from 'react';
const Header2 = () => {
  // JSX
  const [menuDict, setMenuDict] = useState({
    display: 'block',
    height: '0px',
    position: 'absolute',
  });

  const handleMosueEnter = () => {
    setMenuDict({
      display: 'block',
      height: '260px',
      position: 'absolute',
    });
  };

  const handleMosueLeft = () => {
    setMenuDict({
      display: 'block',
      height: '0px',
      position: 'absolute',
    });
  };

  return (
    <nav
      className="MainNav"
      id="MainNav"
      aria-label="Main Menu"
      onMouseEnter={handleMosueEnter}
      onMouseLeave={handleMosueLeft}
    >
      <div className="NavWrapper grid_inner">
        <div id="MSUHome">
          <a href="https://www.missouristate.edu/">
            <span></span>
            <span>MSU Home</span>
          </a>
        </div>
        <a href="#PageInnerWrapper" className="SkipNav">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="Skip page navigation"
            width="1"
            height="1"
          />
        </a>
        <div className="GlobalNav">
          <h2>Missouri State University</h2>
          <ul id="MainMenu" className="MainMenu">
            <li>
              <a
                href="https://www.missouristate.edu/about/"
                target="_top"
                aria-label="Information About Missouri State"
              >
                About MSU
              </a>
            </li>
            <li>
              <a
                href="https://www.missouristate.edu/futurestudents/"
                target="_top"
                aria-label="Information for Future Students"
              >
                Future Students
              </a>
            </li>
            <li>
              <a
                href="https://www.missouristate.edu/currentstudents/"
                target="_top"
                aria-label="Information for Current Students"
              >
                Current Students
              </a>
            </li>
            <li>
              <a
                href="https://www.missouristate.edu/facultystaff/"
                target="_top"
                aria-label="Information for Faculty and Staff"
              >
                Faculty and Staff
              </a>
            </li>
            <li>
              <a
                href="https://alumni.missouristate.edu/"
                target="_top"
                aria-label="Alumni Resources"
              >
                Alumni
              </a>
            </li>
            <li>
              <a
                href="https://www.missouristate.edu/bearsfamilies/"
                target="_top"
                aria-label="Family Programs Resources"
              >
                Family Programs
              </a>
            </li>
            <li>
              <a
                href="https://missouristatebears.com/"
                target="_top"
                aria-label="Intercollegiate Athletics"
              >
                Athletics
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="SubNavWrapper" style={menuDict}>
        <div className="grid_container NavWrapper">
          <div id="SubMenu">
            <div className="NavLinks">
              <h2>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="1"
                  height="1"
                  alt="About MSU Links"
                />
              </h2>
              <ul>
                <li>
                  <a
                    href="https://publicaffairs.missouristate.edu/"
                    aria-label="Public Affairs Mission Information"
                  >
                    Public Affairs Mission
                  </a>
                </li>
                <li>
                  <a
                    href="https://diversity.missouristate.edu/"
                    aria-label="Diversity Resources"
                  >
                    Diversity
                  </a>
                </li>
                <li>
                  <a
                    href="https://news.missouristate.edu/"
                    aria-label="News at Missouri State"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/research/"
                    aria-label="Research at Missouri State"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/costs/"
                    aria-label="Tuition and Fees Information"
                  >
                    Tuition and Fees
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/visitors/"
                    aria-label="Visitor's Guide and Resources"
                  >
                    Visitor’s Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="NavLinks">
              <h2>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="1"
                  height="1"
                  alt="Future Students Links"
                />
              </h2>
              <ul>
                <li>
                  <a
                    href="https://www.missouristate.edu/futurestudents/apply-now.htm"
                    aria-label="Apply now for Missouri State"
                  >
                    Apply Now
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/admissions/"
                    aria-label="Freshman Admission Information"
                  >
                    Freshman Admission
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/majors/"
                    aria-label="Majors and Programs Offered"
                  >
                    Majors and Programs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/transfer/"
                    aria-label="Transfer Student Resources"
                  >
                    Transfer
                  </a>
                </li>
                <li>
                  <a
                    href="https://graduate.missouristate.edu/"
                    aria-label="Graduate Student Resources"
                  >
                    Graduate
                  </a>
                </li>
                <li>
                  <a
                    href="https://international.missouristate.edu/services/"
                    aria-label="International Student Resources"
                  >
                    International
                  </a>
                </li>
                <li>
                  <a
                    href="https://outreach.missouristate.edu/online/"
                    aria-label="Online Programs Resources"
                  >
                    Online Programs
                  </a>
                </li>
              </ul>
            </div>
            <div className="NavLinks">
              <h2>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="1"
                  height="1"
                  alt="Current Students Links"
                />
              </h2>
              <ul>
                <li>
                  <a
                    href="https://www.missouristate.edu/majors/"
                    aria-label="Majors and Programs Offered"
                  >
                    Majors and Programs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/studentengagement/"
                    aria-label="Student Life and Engagement"
                  >
                    Student Life
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/services/"
                    aria-label="Guide to Services and Resources"
                  >
                    Guide to Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/registrar/registration.htm"
                    aria-label="Registration Resources"
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/financialaid/"
                    aria-label="Financial Aid Resources"
                  >
                    Financial Aid
                  </a>
                </li>
                <li>
                  <a
                    href="https://reslife.missouristate.edu/"
                    aria-label="Residence Life Information"
                  >
                    Residence Life
                  </a>
                </li>
              </ul>
            </div>
            <div className="NavLinks">
              <h2>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="1"
                  height="1"
                  alt="Faculty and Staff Links"
                />
              </h2>
              <ul>
                <li>
                  <a
                    href="https://search.missouristate.edu/people"
                    aria-label="Directory for Missouri State"
                  >
                    Directory
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/human/"
                    aria-label="Human Resources Information"
                  >
                    Human Resources
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/provost/"
                    aria-label="Provost Office Resources"
                  >
                    Office of the Provost
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/human/professional-development.aspx"
                    aria-label="Professional Development Resources"
                  >
                    Professional Development
                  </a>
                </li>
                <li>
                  <a
                    href="https://jobs.missouristate.edu/"
                    aria-label="Employment Opportunities at Missouri State"
                  >
                    Employment Opportunities
                  </a>
                </li>
              </ul>
            </div>
            <div className="NavLinks">
              <h2>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="1"
                  height="1"
                  alt="Alumni Links"
                />
              </h2>
              <ul>
                <li>
                  <a
                    href="https://maroonation.missouristate.edu/s/1691/start.aspx?sid=1691&amp;gid=2&amp;pgid=13&amp;cid=664"
                    aria-label="Maroon Nation Events"
                  >
                    MarooNation Events
                  </a>
                </li>
                <li>
                  <a
                    href="https://blogs.missouristate.edu/bearbulletin/"
                    aria-label="Bear Bulletin Stories"
                  >
                    Bear Bulletin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/registrar/TranscriptRequests.htm"
                    aria-label="Transcript Request Information"
                  >
                    Transcript Request
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristatefoundation.org/waysofgiving.asp"
                    aria-label="Make a Gift to Missouri State"
                  >
                    Make a Gift
                  </a>
                </li>
              </ul>
            </div>
            <div className="NavLinks">
              <h2>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="1"
                  height="1"
                  alt="Family Programs Links"
                />
              </h2>
              <ul>
                <li>
                  <a
                    href="https://www.missouristate.edu/bearsfamilies/familyweekend.htm"
                    aria-label="Family Weekend Resources"
                  >
                    Family Weekend
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/registrar/academic-calendar.htm"
                    aria-label="Important Academic Dates"
                  >
                    Important Dates
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristate.edu/bursar/LoginSetupInstructions.htm"
                    aria-label="Make a Payment to Missouri State"
                  >
                    Make a Payment
                  </a>
                </li>
              </ul>
            </div>
            <div className="NavLinks">
              <h2>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  width="1"
                  height="1"
                  alt="Athletics Links"
                />
              </h2>
              <ul>
                <li>
                  <a
                    href="https://missouristatebears.com/sports/2016/7/21/tickets.aspx"
                    aria-label="Get Tickets to Athletic Events"
                  >
                    Tickets
                  </a>
                </li>
                <li>
                  <a
                    href="https://missouristatebears.com/calendar.aspx"
                    aria-label="Athletic Team Schedules"
                  >
                    Schedules
                  </a>
                </li>
                <li>
                  <a
                    href="https://missouristatebears.com/sports/2016/7/21/facilities-mosu-facilities-html.aspx"
                    aria-label="Athletic Facilities"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="https://missouristatebears.com/sports/2016/8/14/social-media-directory.aspx"
                    aria-label="Athletics Social Media"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.missouristatefoundation.org/the-bears-fund.aspx"
                    aria-label="Bears Fund Information"
                  >
                    Bears Fund
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export
export default Header2;
