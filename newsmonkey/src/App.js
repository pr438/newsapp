import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LoadingBar from 'react-top-loading-bar';
import News from './components/News'

export default class App extends Component {
  state=  {
    progress:0
  }
  apiKey ="264c61e19af24e2f8dd86618473b98c8";
  
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            
          />
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="business"
                  pageSize={5}
                  country={"in"}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="entertainment"
                  pageSize={5}
                  country={"in"}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="science"
                  pageSize={5}
                  country={"in"}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="sports"
                  pageSize={5}
                  country={"in"}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="health"
                  pageSize={5}
                  country={"in"}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="technology"
                  pageSize={5}
                  country={"in"}
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/Home"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="general"
                  pageSize={5}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <News  setProgress ={this.setProgress} apiKey ={this.apiKey}
                  key="general"
                  pageSize={5}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
