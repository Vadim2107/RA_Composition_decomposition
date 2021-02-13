import React from 'react';
import Button from './Button'

/**
 * Компонент формы
*/

function Form(props) {
    const {form, onSubmit, onChange} = props;
    
    return (
        <form onSubmit={onSubmit}>
            <label className='logo' htmlFor="data"><img src='https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg' alt='...'></img></label>
            <input id="data" name="data" value={form.name} onChange={onChange} placeholder='Найдётся всё'/>
            <Button onClick={onSubmit} />
        </form>
    );
}

export default Form;
