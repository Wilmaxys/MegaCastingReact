import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import Offer from '../../../components/Offer/Offer';
import FullOffer from '../FullOffer/FullOffer';
import './Offers.css';

class Offers extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log( this.props );
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice( 0, 4 );
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    postSelectedHandler = ( id ) => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push( '/posts/' + id );
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.posts.map( post => {
                return (
                    <Offer
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler( post.id )} />
                );
            } );
        }

        return (
            <div>
                <section className="Offers">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullOffer} />
            </div>
        );
    }
}

export default Offers;