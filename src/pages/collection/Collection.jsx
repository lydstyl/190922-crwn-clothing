import React from 'react';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './collection.scss';

const Collection = ({ match }) => {
  return (
    <div className='category'>
      <h2>CATEGORY PAGE</h2>
      <div>{match.params.categoryId}</div>
    </div>
  );
};

export default Collection;
