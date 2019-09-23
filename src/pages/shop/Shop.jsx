import React, { Component } from 'react';
import SHOP_DATA from './shopData';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
