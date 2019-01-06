import React from 'react';
import {
  connectRefinementList
} from 'react-instantsearch-dom';


const MyRefinementList = connectRefinementList((props) => {

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

export default MyRefinementList;