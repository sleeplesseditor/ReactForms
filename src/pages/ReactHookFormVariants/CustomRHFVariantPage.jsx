import React from 'react';
import ReactHookFormCustom from '../../components/Forms/ReactHookForms/ReactHookFormCustom';
import './RHFVariantPage.scss';

const CustomRHFVariantPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">React Hook Form with Custom Components</h2>
            <ReactHookFormCustom />
        </div>
    )
}

export default CustomRHFVariantPage;