import React from 'react';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './collection.scss';

const CollectionPage = ({ match }) => {
  return (
    <div className='collection-page'>
      <h2>CATEGORY PAGE</h2>
      <div>{match.params.collectionId}</div>
    </div>
  );
};

export default CollectionPage;
