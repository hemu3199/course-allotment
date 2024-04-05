import { useState, useEffect } from "react";
import ListCourses from "./ListCourses";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    mnumber: "",
    email: "",
    credits: "",
    graduating: "",
    preference1: "",
    preference2: "",
    preference3: "",
    preference4: "",
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectCourses, setSelectCourses] = useState([]);
  const [coursePreference, setCoursePreference] = useState([]);
  console.log(coursePreference);
  const [preferenceFlag, setPreferenceFlag] = useState([1, 0, 0, 0]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/courseslist");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setCourses(result);
      console.log(result);
      setCoursePreference((prevState) => {
        //debugger;
        let newList = prevState;
        newList.push(result);
        return newList;
      });
      console.log(courses);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("Preference")) setPreferenceFlag([1, 1, 0, 0]);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCoursesRadioChange = (e) => {
    const n = selectCourses.length;
    const { name, value } = e.target;
    const pno = parseInt(name.charAt(name.length - 1));
    handleRadioChange(e);
    let nSelectCourses = [...selectCourses];
    if (pno > n) {
      nSelectCourses.push(value);
    } else {
      setFormData((prevState) => {
        let updatedFormData = { ...prevState };
        for (let i = pno + 1; i <= 4; i++) {
          updatedFormData[`preference${i}`] = "";
        }
        return updatedFormData;
      });
      nSelectCourses = nSelectCourses.slice(0, pno - 1);
      nSelectCourses.push(value);
      console.log(nSelectCourses);
      console.log(pno);
      let nCoursePreference = [...coursePreference];
      nCoursePreference = coursePreference.map((item, index) =>
        index >= pno ? courses.filter((a) => !nSelectCourses.includes(a)) : item
      );
      console.log(nCoursePreference);
      setCoursePreference(nCoursePreference);
    }
    console.log(coursePreference);
    console.log(nSelectCourses);
    setSelectCourses(nSelectCourses);

    if (pno <= 4) {
      let npreferenceFlag = [...preferenceFlag];
      npreferenceFlag = npreferenceFlag.map((item, index) => {
        if (index === pno) {
          return 1;
        } else if (index < pno) {
          return item;
        } else {
          return 0;
        }
      });
      setPreferenceFlag(npreferenceFlag);
    }
  };

  useEffect(() => {
    if (loading) {
      fetchData();
    }
    const n = selectCourses.length;
    if (n !== 0) {
      let newList = [...coursePreference];
      newList = newList.map((subArray, index) =>
        index < n
          ? subArray
          : subArray.filter((item) => item !== selectCourses[n - 1])
      );
      setCoursePreference(newList);
    }
  }, [selectCourses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to server
    sendDataToServer();
    //console.log(formData); // Example: Log formData to console
  };

  const sendDataToServer = async () => {
    try {
      console.log(formData);
      const response = await fetch("http://localhost:9000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to server");
      }

      const data = await response.json();
      console.log("Response from server:", data);
      // Handle response from server
    } catch (error) {
      console.error("Error sending data to server:", error);
      // Handle error
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        //console.log(loading)
        <form>
          <fieldset className="fieldset">
            <legend>Choose Your Course Priority</legend>
            <div className="form-control">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                aria-describedby="description-1"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>Your MNumber</label>
              <input
                type="text"
                name="mnumber"
                aria-describedby="description-1"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>Your MSU Email</label>
              <input
                type="email"
                name="email"
                aria-describedby="description-1"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>
                How many credit hours will you be completing by the end of
                Spring 2023 (Do not count CSC 232, MTH 314). Only 6 hours out of
                CSC 611, CSC 612. CSC 660 will count towards the credit hours
                for student's with deficiencies
              </label>
              <input
                type="text"
                name="credits"
                aria-describedby="description-1"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>Are you Graduating in Fall 2023 (December 2023)</label>
              <ul className="unstyled horizontal" key={"Graduating"}>
                <li>
                  <input
                    type="radio"
                    id="graduate-yes"
                    name="graduating"
                    value="yes"
                    className="radio"
                    aria-describedby="description-10"
                    //checked={formData.graduating === 'yes'}
                    key={"Yes"}
                    onChange={handleRadioChange}
                  />
                  <label>Yes</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="graduate-no"
                    name="graduating"
                    value="no"
                    className="radio Page2"
                    aria-describedby="description-10"
                    //checked={formData.graduating === 'no'}
                    key={"No"}
                    onChange={handleRadioChange}
                  />
                  <label>No</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="graduate-maybe"
                    name="graduating"
                    value="maybe"
                    className="radio"
                    aria-describedby="description-10"
                    //checked={formData.graduating === 'maybe'}
                    key={"maybe"}
                    onChange={handleRadioChange}
                  />
                  <label>Maybe</label>
                </li>
              </ul>
            </div>

            <fieldset className="fieldset Page10">
              <legend>Courses List</legend>
              {preferenceFlag.map((item, index) =>
                item ? (
                  <ListCourses
                    coursesList={coursePreference[index]}
                    preference={index + 1}
                    handle={handleCoursesRadioChange}
                    clear={formData}
                  />
                ) : (
                  ""
                )
              )}
            </fieldset>
            <button
              className="button"
              name=""
              type="button"
              value=""
              onClick={handleSubmit}
            >
              Submit
            </button>
          </fieldset>
        </form>
      )}
    </>
  );
}

export default Home;
