import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import './Content.css';
import Offers from './Offers/Offers';
import Home from './Home/Home'
import Advices from './Advices/Advices';
import FullOffer from './FullOffer/FullOffer';
import Actor from '../../components/Advice/Actor/Actor';
import Casting from '../../components/Advice/Casting/Casting';
import Figurant from '../../components/Advice/Figurant/Figurant';
import Contact from './Contact/Contact';

class Content extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <Switch>
                <Route path="/contact" exact component={Contact} />
                <Route path="/advices/figurant" exact component={Figurant} />
                <Route path="/advices/casting" exact component={Casting} />
                <Route path="/advices/actor" exact component={Actor} />
                <Route path="/advices" exact component={Advices} />
                <Route path="/offers/:id" component={FullOffer} />
                <Route path="/offers" exact component={Offers} />
                <Route path="/" exact component={Home} />
                <Route render={() => <div className="container"><h1>Not found</h1></div>}/>
            </Switch>
        );
    }
}

export default Content;