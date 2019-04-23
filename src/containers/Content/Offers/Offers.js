import React, { Component } from 'react';
import {
    InstantSearch,
    SearchBox,
    Configure
} from 'react-instantsearch-dom';
import InfiniteHits from '../../../components/InfiniteHits/InfiniteHits';
import { Offer } from '../../../components/Offer/Offer';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';
import MyRefinementList from '../../../components/Refinement/Refinement';

import './Offers.css';

class Offers extends Component {

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
                                <span style={styleTitle}>Domaine</span>
                                <MyRefinementList attribute="DOM_LIBELLE"/>
                            </Box>
                            <Box color="white" className="d-flex flex-column">
                                <span style={styleTitle}>Contrat</span>
                                <MyRefinementList attribute="CON_LIBELLE"/>
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
                            <InfiniteHits minHitsPerPage={12} hitComponent={Offer} />
                        </div>
                    </div>

                </div>
            </InstantSearch>
        );

    }
}

export default Offers;