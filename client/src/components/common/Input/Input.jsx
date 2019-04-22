import React from 'react';
import './Input.css'

const Input = ({name, label, error, data_id,placeholder, value, ...rest}) => {

    return (
        <div>

            <input
                {...rest}
                name={name}
                id={name}
                data-id={data_id}
                placeholder={placeholder}
                value={value}
                // onChange={(value)=>onChange(value)}
                className="form-control"/>
            {error && <p className = "some-class" >{error} </p>}
        </div>

    );
};

export default Input;
