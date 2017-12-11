import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Timeline from './activities/Timeline';
import Search from './activities/Search';
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar>
        <Scene key="root">
          <Scene key="Timeline" component={Timeline} title="Timeline" initial={true} hideNavBar />
          <Scene key="Search" component={Search} title="Search" />
        </Scene>
      </Router>
    )
  }
}

