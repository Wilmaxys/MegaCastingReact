import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Content.css';
import Offers from './Offers/Offers';
import Home from './Home/Home'

class Content extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <Switch>
                <Route path="/posts" component={Offers} />
                <Route path="/" exact component={Home} />
                <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        );
    }
}

export default Content;