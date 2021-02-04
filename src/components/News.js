import React from 'react';

/**
 * Компонент новости, он отображает список новостей
*/

const News = (props) => {
    
    return (
        <ul className={props.className}>
            {props.children(props.items)}
        </ul>
    );
}

export default News;
