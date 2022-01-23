import React from 'react';
import { Route, Switch } from "react-router-dom";
import './styles.css';

import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import MovieDetails from './views/MovieDetails/MovieDetails';
import SearchResults from './views/SearchResults/SearchResults';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
          <Switch>
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/key/:key" component={SearchResults} />
            <Route path="/" exact component={Home} />
          </Switch>
        <Footer />
      </div>
    );
  } 
}

export default App;