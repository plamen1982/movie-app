import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import moviesReducer from './reducers/movie-reducer';
import { getAllMoviesAction } from './actions/movie-actions';

import Main from './containers/Main';
import Header from './components/Header';
import MovieDetails from './containers/MovieDetails';
import CreateMovie from './containers/CreateMovie';

import './index.css';

const allReducers = combineReducers({ movies: moviesReducer });
const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
        allReducers, 
        { movies: []},
        allStoreEnhancers
    );

function mapStateToProps(state, props) {
    return { 
        movies: state.movies
        }
    }

const mapDispatchToProps = {
    getAllMoviesAction
}
       

render(
    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/movies' />}></Route>
                <Route path = '/movies' component={Main}/>
                <Route path='/movie/:movieId' component={MovieDetails} />
                <Route path='/create' component={CreateMovie} />
            </Switch>
            {/* <Footer /> */}
        </Router>
    </Provider>, document.getElementById('root')
);

export default connect(mapStateToProps, mapDispatchToProps)(Router);