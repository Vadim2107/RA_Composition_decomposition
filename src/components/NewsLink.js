import React from 'react';

/**
 * Компонент ссылка на новость в списке новостей
*/

const NewsLink = props =>
<a href={props.link} className="news-link">{props.children}</a>

export default NewsLink;
