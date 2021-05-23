import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Listarticle} from './components/Listarticle';
import {Createarticle} from './components/Createarticle';
import {Editarticle} from './components/Editarticle';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <header className="text-center"><h1>coures</h1></header>
       <Switch>
        <Route path="/" component={Listarticle} exact/>
        <Route path="/create" component={Createarticle} exact/>
        <Route path="/edit/:id" component={Editarticle} exact/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
