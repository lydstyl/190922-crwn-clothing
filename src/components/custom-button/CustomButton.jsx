import React from 'react';

import { CustomButtonContainer } from './CustomButtonStyle';

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
