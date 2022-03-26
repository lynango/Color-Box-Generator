import React from 'react';

const Display = (props) => {
const { boxGenerator } = props;

return (
    <div>
        {boxGenerator.map((color, index) => (
            <div key={index} style={{ 
                display: "inline-block",
                height: "200px", 
                width: "200px",
                margin: "50px", 
                backgroundColor: color
                }}>
            </div>
        ))
        }
    </div>
);
}

export default Display;