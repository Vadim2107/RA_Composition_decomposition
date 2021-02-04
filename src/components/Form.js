import React from 'react';
import Button from './Button'

/**
 * Компонент формы
*/

function Form(props) {
    const {form, onSubmit, onChange} = props;
    
    return (
        <form onSubmit={onSubmit}>        
            <div className='form'>
                <label htmlFor="data">Яндекс</label>
                <input id="data" name="data" value={form.name} onChange={onChange} placeholder='Найдётся всё'/>
            </div>
            <Button onClick={onSubmit} />
        </form>
    );
}

export default Form;
