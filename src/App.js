import React, { Component } from 'react';

import { NotFound } from './pages/NotFound'
import {Switch, Route} from 'react-router-dom'
import { Detail} from './pages/Detail'
import { Home } from './pages/Home'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component{

  render(){
    // const url = new URL(document.location)
    // const hasId = url.searchParams.has('id')
    // const Page = url.searchParams.has('id')
    // ?  <Detail id={url.searchParams.get('id')}/>
    // :  <Home />
    return ( 
    <div clasName='Container'>
    <div className="App">
      <Switch>
        <Route exact path= '/' component={Home} />
        <Route path='/detail/:movieId' component={Detail} />
        <Route component={NotFound} />
      </Switch>
      
    </div>
    </div>
  );
}
}

export default App;
