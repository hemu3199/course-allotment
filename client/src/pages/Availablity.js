import { useState, useEffect } from "react";

function Availablity() {
  const [courses, setCourses] = useState([]);

  const feachData = async () => {
    try {
      const response = await fetch("http://localhost:9000/courses");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setCourses(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    feachData();
  }, []);

  return (
    <>
      <div className="ContentBlock three-column-tout">
        <div className="ContentBlock call-to-action">
          <div className="eyebrow"></div>
          <h2 className="headline">Spring 2024 Couses Available</h2>
        </div>
        <div className="container">
          <article className="ContentBlock programs">
            <ul className="card-list">
              {courses.map((item, index) =>
                item ? (
                  <li class="card">
                    <div class="header">
                      <div class="program">{item.course_name}</div>
                      <div class="option">{item.department}</div>
                    </div>
                    <div class="meta">
                      <div class="types">
                        <center>
                          <h4>Seats Available</h4>
                          <h3>{item.seat_available}</h3>
                        </center>
                      </div>
                      <div class="location">
                        <div class="department">
                          <p>
                            <b>Instractor:</b> {item.intractor}
                          </p>
                        </div>
                        <div class="department">
                          <p>
                            <b>Couse ID:</b> {item.course_id}
                          </p>
                        </div>
                        <div class="department">
                          <p>
                            <b>Section:</b> {item.section_no}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}

export default Availablity;
