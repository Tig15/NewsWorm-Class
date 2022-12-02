import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from  'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
      <Router>
        <NavBar/>
        <LoadingBar
        className='rounded'
        height={3}
        color='#a52a2a'
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={6} key="general" country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={6} key="business" country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={6} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={6} key="health" country="in" category="health" />}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={6} key="sports" country="in" category="sports" />}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={6} key="science" country="in" category="science" />}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={6} key="technology" country="in" category="technology" />}></Route>
        </Routes>   
      </Router>
      </div>
    )
  }
}
