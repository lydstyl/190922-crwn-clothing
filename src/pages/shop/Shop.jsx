import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';

import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';
import { async } from 'q';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot =>
      convertCollectionSnapshotToMap(snapshot)
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />{' '}
        {/* We add a param named categoryId in the match object in the Category page */}
      </div>
    );
  }
}

export default ShopPage;
