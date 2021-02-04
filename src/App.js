import React from 'react';
import './App.css';
import News from './components/News';
import NewsItem from './components/NewsItem';
import NewsIcon from './components/NewsIcon';
import Form from './components/Form';

class App extends React.Component {
  state = {
    name: '',
  };

/**
 * Список новостей
*/

  news = [
    {
      link: 'Новость-1',
      icon: 'https://cdn.icon-icons.com/icons2/966/PNG/128/News_icon-icons.com_74697.png',
      text: 'JavaScript JavaScript JavaScript',
    },
    {
      link: 'Новость-2',
      icon: 'https://cdn.icon-icons.com/icons2/12/PNG/128/news_newspapers_coffee_thepaper_glass_glasses_1766.png',
      text: 'React React React',
    },
    {
      link: 'Новость-3',
      icon: 'https://cdn.icon-icons.com/icons2/966/PNG/128/News_icon-icons.com_74697.png',
      text: 'HTML HTML HTML',
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
              <NewsIcon className='news-icon' key={index}>{item.icon}</NewsIcon>
              <NewsItem className='news-item' key={index}>{item.link}<p>{item.text}</p></NewsItem>
            </React.Fragment>)}          
        </News>
        <Form 
          form = {this.state}
          onSubmit = {this.onSubmit}
          onChange = {this.onChange} />
      </React.Fragment>
    );    
  }  
}

export default App;
