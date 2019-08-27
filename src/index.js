import React from "react";
import { render } from "react-dom";
import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import moviesReducer from './reducers/movie-reducer';
import App from "./containers/App";
import Header from "./components/Header";
import { getAllMoviesAction } from './actions/movie-actions';
import { connect } from 'react-redux';
import "./index.css";


const allReducers = combineReducers({ movies: moviesReducer });
const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
        allReducers, 
        { movies: [{ name: 'Lord of the rings' }],},
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
                <Route exact path='/movies' component={App} />
                {/* <Route path='/movie/:movieId' component={} /> */}
            </Switch>
            {/* <Footer /> */}
        </Router>
    </Provider>, document.getElementById("root")
);

export default connect(mapStateToProps, mapDispatchToProps)(Router);