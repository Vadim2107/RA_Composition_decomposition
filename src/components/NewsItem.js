import React from 'react';
import NewsText from './NewsText';
import NewsLink from './NewsLink';

/**
 * Компонент новость в списке новостей
*/

const NewsItem = props => {

    return (
        <li className={props.className}>    
            <NewsLink>{props.children[0]}</NewsLink>
            <NewsText>{props.children[1]}</NewsText>
        </li>
    )
}

export default NewsItem;
