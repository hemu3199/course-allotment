import { useState, useEffect } from "react";

function Home() {

  const [formData, setFormData] = useState({
    name:'',
    mnumber:'',
    email:'',
    credits:'',
    graduating:''    
  });

  // useEffect(() => {
  //   fetch("http://localhost:9000/courses")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //setCoursesList(data);
  //     });
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to server
    sendDataToServer();
    //console.log(formData); // Example: Log formData to console
  };

  const sendDataToServer = async () => {
    try {
      console.log(formData);
        const response = await fetch('http://localhost:9000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send data to server');
        }

        const data = await response.json();
        console.log('Response from server:', data);
        // Handle response from server
    } catch (error) {
        console.error('Error sending data to server:', error);
        // Handle error
    }
};



  return (
    <>
      <form>
        <fieldset className="fieldset">
          <legend>Choose Your Course Priority</legend>
          <div className="form-control">
            <label>Your Name</label>
            <input type="text" name="name" aria-describedby="description-1" onChange={handleChange}/>
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
            <input type="email" name="email" aria-describedby="description-1" onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label>
              How many credit hours will you be completing by the end of Spring
              2023 (Do not count CSC 232, MTH 314). Only 6 hours out of CSC 611,
              CSC 612. CSC 660 will count towards the credit hours for student's
              with deficiencies
            </label>
            <input type="text" name="credits" aria-describedby="description-1" onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label>Are you Graduating in Fall 2023 (December 2023)</label>
            <ul className="unstyled horizontal">
              <li>
                <input
                  type="radio"
                  id="graduate-yes"
                  name="graduating"
                  value="yes"
                  className="radio"
                  aria-describedby="description-10"
                  //checked={formData.graduating === 'yes'}
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
                  onChange={handleRadioChange}
                />
                <label>Maybe</label>
              </li>
            </ul>
          </div>
          <button className="button" name="" type="button" value="" onClick={handleSubmit}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default Home;
