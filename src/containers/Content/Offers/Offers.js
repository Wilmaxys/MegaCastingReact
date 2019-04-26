import React, { Component } from 'react';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';
import axios from '../../../axios';
import UniformGrid from '../../../components/UniformGrid/UniformGrid';
import { NavLink } from 'react-router-dom';
import './Offers.css';

class Offers extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            localPost: null,
            loadedPost: null,
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    componentDidMount () {
        console.log("Did mount");
        this.loadData();
    }

    loadData () {
        let loadedPost = null;
        let list = [];

        console.log("loadData");

        if(this.state.loadedPost == null){

            axios.get( '/offre/public', { headers:  { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IkpHcmF5IiwiaWQiOiI1MiIsImlhdCI6MTU0NzAzMjY5MiwiZXhwIjoxNTQ3MDc1ODkyfQ._6CsUUIznN5BflzT7nrVvye34FMzNvpNgLd10Aw0iUE' } } )
            .then( response => {
                loadedPost = response.data.offres;
                console.log(loadedPost);
        
                if ( loadedPost ) {
                    list = loadedPost.map(hit => (
                    <p>{hit.cast_intitule}</p>
                ));
                }

                this.setState({
                    localPost : list,
                    loadedPost : loadedPost
                });
            } );

        }

    }

    render() {
        
        console.log('render');

        let listShow = [];

        if(this.state.loadedPost != null){

            console.log('passe');
            
            this.state.loadedPost.forEach(element => {

                if(element.cast_intitule.includes(this.state.value)
                  || element.client.prospect.pro_num_tel.includes(this.state.value)
                  || element.client.prospect.pro_email.includes(this.state.value)
                  || element.client.prospect.pro_name.includes(this.state.value)
                  || element.metier.met_libelle.includes(this.state.value)
                  || element.localisation.loc_libelle.includes(this.state.value)
                  || element.contrat.con_libelle.includes(this.state.value)
                  || element.metier.domaine.dom_libelle.includes(this.state.value)
                )
                {
                    listShow.push(
                        // <Box color="white" className="d-flex flex-column shadow p-3 bg-white rounded">
                        //     {element.cast_intitule}
                        // </Box>
                        <Box className="d-flex flex-column shadow p-3 bg-white rounded">
                            <span>Intitulé : {element.cast_intitule}</span>
                            <span>Téléphone : {element.client.prospect.pro_num_tel}</span>
                            <span>Email : {element.client.prospect.pro_email}</span>
                            <span>Nom : {element.client.prospect.pro_name}</span>
                            <span>Métier : {element.metier.met_libelle}</span>
                            <span>Localisation : {element.localisation.loc_libelle}</span>
                            <span>Contrat : {element.contrat.con_libelle}</span>
                            <span>Domaine : {element.metier.domaine.dom_libelle}</span>
                        <NavLink to={`/offers/${element.cast_id}`}>Voir plus...</NavLink>
                    </Box>
                    );
                }

            });
        }
        
        // listShow.forEach(element => {
            
        // });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    
                        <Box color="white" className="d-flex flex-column">
                            <Title align="left" color="#1F3040" fade="#1F3040">
                                Offres
                            </Title>
                        </Box>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
                            <small id="emailHelp" className="form-text text-muted">Vous pouvez trouver ici une barre pour rechercher des offres.</small>
                        </form>
                        <UniformGrid size="4" list={listShow} />
                    </div>
                </div>

            </div>
        );

    }
}

export default Offers;