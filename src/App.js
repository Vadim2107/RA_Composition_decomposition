import React from 'react';
import './App.css';
import News from './components/News';
import NewsItem from './components/NewsItem';
import Icon from './components/Icon';
import Form from './components/Form';
import Services from './components/Services';
import Service from './components/Service';

class App extends React.Component {
  state = {
    name: '',
  };

/**
 * Список новостей
*/

  news = [
    {
      link: '#0',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1048-1478692902313-square/logo-square',
      text: 'Глава офиса Зеленского заявил о невыполнимости Минских соглашений',
    },
    {
      link: '#1',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
      text: 'Навальный начал давать показания по делу о клевете на ветерана',
    },
    {
      link: '#2',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/28627/1014-1583822440403-square/logo-square',
      text: 'В России выявили 15 089 новых заражений коронавирусом',
    },
    {
      link: '#3',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square',
      text: 'В Крыму посоветовали Анкаре оставить мечты о территориях юга России',
    }
  ]

  services = [
    {
      link: '#0',
      icon: 'https://yastatic.net/s3/home/services/block/adv_promo.svg',
      text: 'Объявления',
    },
    {
      link: '#1',
      icon: 'https://yastatic.net/s3/home/services/block/market_4.svg',
      text: 'Маркет',
    },
    {
      link: '#2',
      icon: 'https://yastatic.net/s3/home/services/block/video.svg',
      text: 'Видео',
    },
    {
      link: '#3',
      icon: 'https://yastatic.net/s3/home/services/block/kartinki.svg',
      text: 'Картинки',
    },
    {
      link: '#4',
      icon: 'https://yastatic.net/s3/home/services/block/news.svg',
      text: 'Новости',
    },
    {
      link: '#5',
      icon: 'https://yastatic.net/s3/home/services/block/maps.svg',
      text: 'Карты',
    },
    {
      link: '#6',
      icon: 'https://yastatic.net/s3/home/services/block/translate.svg',
      text: 'Переводчик',
    },
    {
      link: '#7',
      icon: 'https://yastatic.net/s3/home/services/block/rasp.svg',
      text: 'ещё',
    }
  ]
  
  onSubmit = evt => {
    evt.preventDefault();
    this.setState({name: ""});
  }
    
  onChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    this.setState({name: value});
  }

  render() {
    
    return (
      <React.Fragment>
        <News className='news' items={this.news}>
          {items => items.map((item, index) =>
            <React.Fragment>
              <div className='news-item-container'>
                <Icon className='news-icon' key={index}>{item.icon}</Icon>
                <NewsItem className='news-item' key={index} link={item.link}>{item.text}</NewsItem>
              </div>              
            </React.Fragment>)}          
        </News>
        <Services className='services-list' services={this.services}>
          {services => services.map((service, index) =>
            <React.Fragment>
              <Service link={service.link}>
                <Icon className='services-icon' key={index}>{service.icon}</Icon>
                {service.text}
              </Service>              
            </React.Fragment>)}
        </Services>
        <Form 
          form = {this.state}
          onSubmit = {this.onSubmit}
          onChange = {this.onChange} />
      </React.Fragment>
    );    
  }  
}

export default App;
