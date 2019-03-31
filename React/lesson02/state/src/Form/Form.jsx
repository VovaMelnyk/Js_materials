import React from 'react';
import './Form.css';

const Form = ({text,inputChange, email, password, formSubmit}) => {
    return (
        <form onSubmit = {formSubmit}>
            <input type="text" className='text' name='text' placeholder='Enter word' value={text} onChange = {inputChange}/>
            <input type="email" className='text' name='email' placeholder = 'Enter mail' value={email} onChange = {inputChange}/>
            <input type="password" className='text' name='password' placeholder = 'Enter password' value={password} onChange = {inputChange}/>
            <input type="submit" className='btn'/>
        </form>
    );
};

export default Form;