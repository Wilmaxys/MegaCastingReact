import React from 'react';
import {
    Highlight
} from 'react-instantsearch-dom';
import { NavLink } from 'react-router-dom';
import Box from '../Box/Box';


import './Offer.css';

export const Offer = ({hit}) => {
    return(
        <Box color="red" className="d-flex flex-column shadow-sm p-3 mb-5 bg-white rounded">
            <Highlight
                attribute="PRO_NAME"
                hit={hit}
            />
            <Highlight
                attribute="CTC_EMAIL"
                hit={hit}
            />
            <Highlight
                attribute="MET_LIBELLE"
                hit={hit}
            />
            <Highlight
                attribute="LOC_LIBELLE"
                hit={hit}
            />

            <NavLink to={`/offers/${hit.CAST_ID}`}>Voir plus...</NavLink>
        </Box>
    )};