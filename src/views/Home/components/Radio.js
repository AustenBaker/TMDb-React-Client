import React from 'react';
import "./Radio.css";

export default function Radio(props) {

  function handleChange(e) {
    props.setSelected(e.currentTarget.value);
  }

  return(
    <div className="radio">
    	<input 
        label="Popular" type="radio" name="name" value="popular" 
        onChange={handleChange}  defaultChecked
      />
    	<input 
        label="Top Rated" type="radio" name="name" value="top_rated" 
        onChange={handleChange} 
      />
    </div>
  )
}