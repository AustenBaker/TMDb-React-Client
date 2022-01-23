import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles.css';

import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import MovieDetails from './views/MovieDetails/MovieDetails';
import SearchResults from './views/SearchResults/SearchResults';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Nav />
          <Switch>
            <Route exact path="TMDb-React-Client/" component={Home} />
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/key/:key" component={SearchResults} />
          </Switch>
        <Footer />
      </BrowserRouter>
    );
  } 
}

export default App;