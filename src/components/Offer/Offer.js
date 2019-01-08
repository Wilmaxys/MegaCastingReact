import React from 'react';
import {
    Highlight
} from 'react-instantsearch-dom';
import { NavLink } from 'react-router-dom';
import Box from '../Box/Box';


import './Offer.css';

export const Offer = ({hit}) => {
    return(
        <Box className="d-flex flex-column shadow p-3 bg-white rounded">
            <span>Intitulé : <Highlight
                attribute="CAST_INTITULE"
                hit={hit}
            /></span>
            <span>Téléphone : <Highlight
                attribute="CTC_NUM_TEL"
                hit={hit}
            /></span>
            <span>Email : <Highlight
                attribute="CTC_EMAIL"
                hit={hit}
            /></span>
            <span>Nom : <Highlight
                attribute="PRO_NAME"
                hit={hit}
            /></span>
            <span>Métier : <Highlight
                attribute="MET_LIBELLE"
                hit={hit}
            /></span>
            <span>Localisation : <Highlight
                attribute="LOC_LIBELLE"
                hit={hit}
            /></span>
            <span>Contrat : <Highlight
                attribute="CON_LIBELLE"
                hit={hit}
            /></span>
            <span>Domaine : <Highlight
                attribute="DOM_LIBELLE"
                hit={hit}
            /></span>
            <NavLink to={`/offers/${hit.CAST_ID}`}>Voir plus...</NavLink>
        </Box>
    )};