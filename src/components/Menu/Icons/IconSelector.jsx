import React from 'react';

import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as FormIcon } from './formIcon.svg';
import { ReactComponent as FormikIcon } from './formikIcon.svg';
import { ReactComponent as ReactLogo } from './reactLogo.svg';

const getIcon = (icon) => {
  const iconSelection = {
      arrowIcon: () => <ArrowIcon/>,
      formIcon: () => <FormIcon/>,
      formikIcon: () => <FormikIcon/>,
      reactLogo: () => <ReactLogo/>,
      default: () => null
  }

  return (iconSelection[icon] || iconSelection.default)()
}

export const IconSelector = (icon) => {
    const iconClass = getIcon(icon);
    return (
      <>
        {iconClass}
      </>
    );
};