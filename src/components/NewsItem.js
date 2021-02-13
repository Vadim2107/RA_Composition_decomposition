import React from 'react';
import NewsLink from './NewsLink';

/**
 * Компонент новость в списке новостей
*/

const NewsItem = props => {

    return (
        <li className={props.className}>    
            <NewsLink link={props.link}>{props.children}</NewsLink>            
        </li>
    )
}

export default NewsItem;
