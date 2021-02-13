import React from 'react';

/**
 * Компонент услуги, он отображает список услуг
*/

const Services = (props) => {
    
    return (
        <ul className={props.className}>
            {props.children(props.services)}
        </ul>
    );
}

export default Services;