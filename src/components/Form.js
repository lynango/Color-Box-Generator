import React, { useState } from 'react';

const Form = (props) => {

const { boxGenerator, setColors } = props;

const [color, setColor] = useState("");

const submitHandler = (event) => {

    event.preventDefault();
    setColors( [ ...boxGenerator, color ] );
}

return (
    <div>
        <form onSubmit={ submitHandler } style={{ margin: "30px" }}>
            <div>
                <label htmlFor="firstName">Name a Color: </label>
                <input 
                    type="text" 
                    name="color"
                    onChange={ (e) => setColor(e.target.value) }
                    />
            <button class="button button">Add</button>
            </div>
        </form>
    </div>
    )
}

export default Form;