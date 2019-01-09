import React, { Component } from 'react';
import axios from '../../../axios';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';

import './FullOffer.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log("Did mount");
        this.loadData();
    }

    componentDidUpdate() {
        console.log("Did update");
        this.loadData();
    }

    loadData () {

        console.log("loadData");
        const { loadedPost } = this.state;
        const { match } = this.props;
        

        if ( match.params.id ) {
            if ( !loadedPost || (loadedPost && loadedPost.objectID !== +match.params.id) ) {
                axios.get( '/offreCastings/' + match.params.id )
                    .then( response => {
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    render () {

        console.log("render");

        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        
        if ( this.state.loadedPost ) {
            post = (
            <div className="container">
                <Box color="#1F3040" textColor="white">
                    <Title align="left" color="#AFE9FF" fade="#AFE9FF">
                        {this.state.loadedPost.CAST_INTITULE} - {this.state.loadedPost.CAST_REFERENCE}
                    </Title>
                    <div>
                        <b>Nom du demandeur :</b> {this.state.loadedPost.PRO_NAME}                    
                    </div>
                    <div>
                        <b>Numéro de téléphone :</b> {this.state.loadedPost.CTC_NUM_TEL}                    
                    </div>
                    <div>
                        <b>Numéro de fax :</b> {this.state.loadedPost.CTC_NUM_FAX}                    
                    </div>
                    <div>
                        <b>Email :</b> {this.state.loadedPost.CTC_EMAIL}                    
                    </div>
                    <div>
                        <b>Métier :</b> {this.state.loadedPost.MET_LIBELLE}                    
                    </div>
                    <div>
                        <b>Domaine :</b> {this.state.loadedPost.DOM_LIBELLE}                    
                    </div>
                    <div>
                        <b>Localisation :</b> {this.state.loadedPost.LOC_LIBELLE}                    
                    </div>
                    <div>
                        <b>Contrat :</b> {this.state.loadedPost.CON_LIBELLE}                    
                    </div>
                    <div>
                        <b>Description du poste :</b> {this.state.loadedPost.CAST_DESCRIPTION_POSTE}                    
                    </div>
                    <div>
                        <b>Description du profil :</b> {this.state.loadedPost.CAST_DESCRIPTION_PROFIL}                    
                    </div>
                    <div>
                        <b>Description du profil :</b> {this.state.loadedPost.CAST_DESCRIPTION_PROFIL}                    
                    </div>
                    <div>
                        <b>Description du profil :</b> {this.state.loadedPost.CAST_DESCRIPTION_PROFIL}                    
                    </div>
                    <div>
                        <b>Date de début publication :</b> {this.state.loadedPost.CAST_DATE_DEBUT_PUBLICATION}                    
                    </div>
                    <div>
                        <b>Date de début de contrat :</b> {this.state.loadedPost.CAST_DATE_DEBUT_CONTRAT}                    
                    </div>
                    <div>
                        <b>Durée :</b> {this.state.loadedPost.CAST_DUREE_DIFFUSION} jours                    
                    </div>
                </Box>
            </div>
            );
        }
        return post;
    }
}

export default FullPost;