import React, { Component } from 'react';
import axios from '../../../axios';


import './FullOffer.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        const { loadedPost } = this.state;
        const { match } = this.props;
        

        if ( match.params.id ) {
            if ( !loadedPost || (loadedPost && loadedPost.id !== +match.params.id) ) {
                axios.get( '/offreCastings/' + match.params.id )
                    .then( response => {
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }

        debugger;

        if ( this.state.loadedPost ) {
            post = (
                <div className="FullOffer">
                    <h1>{this.state.loadedPost.CAST_DESCRIPTION_POSTE}</h1>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;