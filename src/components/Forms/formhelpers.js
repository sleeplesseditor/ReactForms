import React from 'react';

function ValidationMessage(props) {
    if(!props.valid) {
        return(
        <div className="alert-danger" role="alert">{props.message}</div>
        )
    }
    return null;
}

export { ValidationMessage };