import React, { Component } from 'react';
import {
    InstantSearch,
    SearchBox,
    connectRefinementList,
    Configure
} from 'react-instantsearch-dom';
import InfiniteHits from '../../../components/InfiniteHits/InfiniteHits';
import { Offer } from '../../../components/Offer/Offer';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';


// import axios from '../../../axios';
// import { Route } from 'react-router-dom';
// import Offer from '../../../components/Offer/Offer';
// import FullOffer from '../FullOffer/FullOffer';

import './Offers.css';

const MyRefinementList = connectRefinementList((props) => {
    console.log(props);

    return (props.items.map(({ label, count, isRefined }) => (
        <div className="elementRefine"><span className={isRefined ? 'refined' : null} onClick={() => {
            if(isRefined){
                const index = props.currentRefinement.findIndex((refinement) => { return (refinement === label) });
                let tempArray = [...props.currentRefinement]
                tempArray.splice(index, 1);
                if(tempArray.length === 0){
                    props.refine('');
                }
                else{
                    props.refine(tempArray);
                }
            }
            else{
                props.refine([...props.currentRefinement, label]) 
            }
        }}>{label}  <span className="count">{count}</span></span></div>
    )))
});



class Offers extends Component {

    /*state = {
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
    }*/

    render() {

        let styleTitle = {
            fontWeight: 'bold',
            margin: '10px 0px'
        }

        return (
            <InstantSearch
                appId="9FGBZNOUZ3"
                apiKey="92286c5a9399bf30ccceb915cd308ad6"
                indexName="offreCastingsFormated"
            >
                <div className="container">
                    <SearchBox/>

                    <Configure hitsPerPage={12} />

                    <div className="row">
                        <div className="col-md-3 col-12 searchColumn">
                            <Title align="left" color="#1F3040" fade="#1F3040">
                            Filtres
                            </Title>
                            <Box color="white" className="d-flex flex-column">
                                <span style={styleTitle}>Métier</span>
                                <MyRefinementList attribute="MET_LIBELLE"/>
                            </Box>
                            <Box color="white" className="d-flex flex-column">
                                <span style={styleTitle}>Localisation</span>
                                <MyRefinementList attribute="LOC_LIBELLE"/>
                            </Box>
                        </div>
                        <div className="col-md-9 col-12">
                        <Box color="white" className="d-flex flex-column">
                            <Title align="left" color="#1F3040" fade="#1F3040">
                                Offres
                            </Title>    
                        </Box>
        
                            <InfiniteHits minHitsPerPage={6} hitComponent={Offer} />
                        </div>
                    </div>

                </div>
            </InstantSearch>
        );

        /* let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
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
        );*/

    }
}

export default Offers;