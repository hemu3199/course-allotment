import { useState, useEffect } from "react";

function Home() {
  const [coursesList, setCoursesList] = useState([]);
  const [assertChoices, setAssertChoices] = useState([]);
  const [choiceList, setChoiceList] = useState([]);
  const [choiceNumber, setChoiceNumber] = useState(0);

  useEffect(() => {
    fetch("http://localhost:9000/courses")
      .then((response) => response.json())
      .then((data) => {
        setCoursesList(data);
      });
  }, []);

  useEffect(() => {
    console.log(choiceNumber);
    console.log(choiceList);
    if(choiceNumber<assertChoices.length){
      let tempMenu = [...assertChoices];
      tempMenu.splice(choiceNumber-1);
      setAssertChoices(tempMenu);
    }
    if (choiceNumber > 0 && choiceNumber < 5) {
      let newList = coursesList.filter(item => !choiceList.includes(item));
      let newElement = (
        <div className="form-control">
          <legend>
            Which classes are you most interested in taking? Select your choice{" "}
            {choiceNumber + 1}
          </legend>
          <ul className="unstyled">
            {
              newList.map(function (k, index) {
                return (
                  <li>
                    <input
                      type="radio"
                      name={choiceNumber + 1}
                      value={k}
                      onChange={choiceHandler}
                      className="radio"
                    />
                    <label>{k}</label>
                  </li>
                );
              })}
          </ul>
        </div>
      );
      setAssertChoices((prev) => [...prev, newElement]);
      let radioButtons = document.querySelectorAll('input[type="radio"][name="'+(choiceNumber + 1)+'"]')
      radioButtons.forEach((rb) => {
        rb.checked=false;
      });
    }
  }, [choiceNumber]);


  const choiceHandler = (e) => {
    let tempList = [...choiceList];
    let index = Number(e.target.name);
    tempList[index-1] = e.target.value;
    tempList.splice(index);
    setChoiceList(tempList);
    setChoiceNumber(index);
  };

  return (
    <>
      <form>
        <fieldset className="fieldset">
          <legend>Choose Your Course Priority</legend>
          <div className="form-control">
            <label>Your Name</label>
            <input type="text" name="name" aria-describedby="description-1" />
          </div>
          <div className="form-control">
            <label>Your MNumber</label>
            <input
              type="text"
              name="mnumber"
              aria-describedby="description-1"
            />
          </div>
          <div className="form-control">
            <label>Your MSU Email</label>
            <input type="email" name="mail" aria-describedby="description-1" />
          </div>
          <div className="form-control">
            <label>
              How many credit hours will you be completing by the end of Spring
              2023 (Do not count CSC 232, MTH 314). Only 6 hours out of CSC 611,
              CSC 612. CSC 660 will count towards the credit hours for student's
              with deficiencies
            </label>
            <input type="text" name="mail" aria-describedby="description-1" />
          </div>
          <div className="form-control">
            <label>Are you Graduating in Fall 2023 (December 2023)</label>
            <ul className="unstyled horizontal">
              <li>
                <input
                  type="radio"
                  id="graduate-yes"
                  name="graduate_btn_group"
                  value="yes"
                  className="radio"
                  aria-describedby="description-10"
                />
                <label>Yes</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="graduate-no"
                  name="graduate_btn_group"
                  value="no"
                  className="radio Page2"
                  aria-describedby="description-10"
                />
                <label>No</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="graduate-maybe"
                  name="graduate_btn_group"
                  value="maybe"
                  className="radio"
                  aria-describedby="description-10"
                />
                <label>Maybe</label>
              </li>
            </ul>
          </div>
          <div className="form-control">
            <legend>
              Which classes are you most interested in taking? Select your
              choice 1
            </legend>
            <ul className="unstyled">
              {coursesList.length > 0 &&
                coursesList.map(function (k, index) {
                  return (
                    <li>
                      <input
                        type="radio"
                        name="1"
                        value={k}
                        onChange={choiceHandler}
                        className="radio"
                      />
                      <label>{k}</label>
                    </li>
                  );
                })}
            </ul>
          </div>
          {assertChoices}
        </fieldset>
      </form>
    </>
  );
}

export default Home;
