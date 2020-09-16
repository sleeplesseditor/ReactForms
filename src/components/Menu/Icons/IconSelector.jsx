import React from 'react';
import { IconNames } from './iconNames';

// import { ReactComponent as ArrowIcon } from './arrow.svg';
// import { ReactComponent as BasicIcon } from './basic.svg';
// import { ReactComponent as CubeIcon } from './cube.svg';
// import { ReactComponent as GlobalisationIcon } from './globalisation.svg';
// import { ReactComponent as GlobeIcon } from './globeIcon.svg';
// import { ReactComponent as LineIcon } from './lineGraph.svg';
// import { ReactComponent as MapIcon } from './mapIcon.svg';
// import { ReactComponent as MountainIcon } from './mountains.svg';
// import { ReactComponent as SwitchIcon } from './switch.svg';


const getIcon = (icon) => {
    switch (icon) {
        // case IconNames.arrowIcon:
        //     return <ArrowIcon/>;
        // case IconNames.basicIcon:
        //     return <BasicIcon/>;
        // case IconNames.cubeIcon:
        //     return <CubeIcon/>;
        // case IconNames.globalisation:
        //     return <GlobalisationIcon/>;
        // case IconNames.globeIcon:
        //     return <GlobeIcon/>;
        // case IconNames.lineIcon:
        //     return <LineIcon/>;
        // case IconNames.mapIcon:
        //     return <MapIcon/>;
        // case IconNames.mountainIcon:
        //     return <MountainIcon/>;
        // case IconNames.switchIcon:
        //     return <SwitchIcon/>;
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