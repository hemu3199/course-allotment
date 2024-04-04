import { useState, useEffect } from "react";

const ListCourses = ({coursesList, preference, handle, clear}) => {

  return (
    <>
      <div className="description" id="description-10" key={`preference${preference}`}>
        Preference {preference}
      </div>
      <ul className="unstyled" key={`preference${preference}-list`}>
        {coursesList.map((item, index) => (
          <li>
            <input
              type="radio"
              id="field-2"
              name={`preference${preference}`}
              value={item}
              className="radio Page2"
              checked={clear[`preference${preference}`] === item}
              aria-describedby="description-10"
              onChange={handle }
              key={`preference${preference}-item${index}`}
            />
            <label htmlFor="field-2">{item}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListCourses;
