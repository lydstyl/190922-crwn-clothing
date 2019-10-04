import React from 'react';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './category.scss';

const Category = ({ match }) => {
  return (
    <div className='category'>
      <h2>CATEGORY PAGE</h2>
      <div>{match.params.categoryId}</div>
    </div>
  );
};

export default Category;
