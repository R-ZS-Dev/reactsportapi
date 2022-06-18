import { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';

export default class App extends Component{
  render(){
      return (
        <div>
          <h1 className='text-center'>Sports</h1>
          <News></News>
        </div>
      )
  }
}
