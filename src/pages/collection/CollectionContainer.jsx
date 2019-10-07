import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelector';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => {
    return !selectIsCollectionsLoaded(state);
  }
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionContainer;
