import React from 'react';
import { IconNames } from './iconNames';

import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as FormIcon } from './formIcon.svg';
import { ReactComponent as FormikIcon } from './formikIcon.svg';
import { ReactComponent as ReactLogo } from './reactLogo.svg';

const getIcon = (icon) => {
    switch (icon) {
        case IconNames.arrowIcon:
            return <ArrowIcon/>;
        case IconNames.formIcon:
          return <FormIcon/>;
        case IconNames.formikIcon:
          return <FormikIcon/>;
        case IconNames.reactLogo:
          return <ReactLogo/>;
        default:
            break;
    }
};

export const IconSelector = (icon) => {
    const iconClass = getIcon(icon);
    return (
      <>
        {iconClass}
      </>
    );
};