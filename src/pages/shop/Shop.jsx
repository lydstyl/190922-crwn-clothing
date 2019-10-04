import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Category from '../collection/Collection';

const Shop = ({ match }) => {
  // match, location and history are there because of <Route path='/shop' component={ShopPage} /> in App.js
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />{' '}
      {/* We add a param named categoryId in the match object in the Category page */}
    </div>
  );
};

export default Shop;
