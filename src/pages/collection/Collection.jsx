import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem';

import { selectCollection } from '../../redux/shop/shopSelector';

import './collection.scss';

const CollectionPage = ({ collection }) => {
  const { items } = collection;

  return (
    <div className='collection-page'>
      <h2>CATEGORY PAGE</h2>

      <div className='preview'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) // this selector needs a part of the state depending on the URL parameter
});

export default connect(mapStateToProps)(CollectionPage);
