import React, { useState, useMemo } from 'react';

function MyComponent() {
    const [data, setData] = useState([0, 0, 0, 0]);

    const computedValue = useMemo(() => {
        // Perform some computation based on the data array
        return data.map(item => item * 2); // Double each element of the data array
    }, [data]); // Memoize the computed value based on changes to the data array

    const handleButtonClick = () => {
        setData(prevData => {
            let n = [...prevData]
            n[0] = 10;
            return n
        }); // Add a new element to the data array
    };

    return (
        <div>
            {/* Button to add a new element to the data array */}
            <div onClick={handleButtonClick}>Add Element</div>

            {/* Render the computed value */}
            <div>Computed Value: {computedValue.join(', ')}</div>
        </div>
    );
}

export default MyComponent;