import React from 'react';

/**
 * Компонент кнопка (она нажимается!) для отправки формы поиска
*/

function Button(props) {
    return(
        <button type="submit" className="submit" onClick={props.onClick}>
            Найти
        </button>
    )
}

export default Button;
