import React, { Component } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import UniformGrid from '../UniformGrid/UniformGrid';
import 'intersection-observer';

import './InfiniteHits.css';

class InfiniteHits extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    hasMore: PropTypes.bool.isRequired,
    refine: PropTypes.func.isRequired,
  };

  sentinel = null;

  onSentinelIntersection = entries => {
    const { hasMore, refine } = this.props;

    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore) {
        refine();
      }
    });
  };

  componentDidMount() {
    this.observer = new IntersectionObserver(this.onSentinelIntersection);

    this.observer.observe(this.sentinel);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const { hits, hitComponent: HitComponent } = this.props;

    let list = hits.map(hit => (
      <li key={hit.objectID} className="ais-InfiniteHits-item">
        <HitComponent hit={hit} />
      </li>
    ));

    return (
      <div className="ais-InfiniteHits">
        <ul className="ais-InfiniteHits-list">
          <UniformGrid size="6" list={list} />
          <li
            className="ais-InfiniteHits-sentinel"
            ref={c => (this.sentinel = c)}
          />
        </ul>
      </div>
    );
  }
}

export default connectInfiniteHits(InfiniteHits);
