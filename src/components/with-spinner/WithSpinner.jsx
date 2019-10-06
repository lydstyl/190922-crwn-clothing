import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './WithSpinnerStyles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  // hight order component
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
