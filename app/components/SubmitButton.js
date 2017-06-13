import React from 'react';

const SubmitButton = (props) => {
  return (
    <button id="submit-button" type="button" className="btn btn-default" onClick={ props.onClick }>Submit</button>
  )
}

export default SubmitButton;
