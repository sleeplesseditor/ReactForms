import React from 'react';
import { IconNames } from './iconNames';

import { ReactComponent as ArrowIcon } from './arrow.svg';

const getIcon = (icon) => {
    switch (icon) {
        case IconNames.arrowIcon:
            return <ArrowIcon/>;
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