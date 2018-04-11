import React from 'react';

import './search-form.css';

export default function SearchForm(props) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()

            let inputValue = event.target.userInput.value;
            props.onClick(inputValue)
            
            }}>
            <label htmlFor="search">Search</label>
            <input 
                type="text"
                name="userInput"
                placeholder="E.g. Monday"  
            />
            <button type="submit">Show Me The Weather!</button>
        </form>    
    );
};