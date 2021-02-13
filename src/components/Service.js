import React from 'react';

/**
 * Компонент ссылка на услугу в списке услуг
*/

const Service = props =>
<a href={props.link} className='services-item'>{props.children}</a>

export default Service;
