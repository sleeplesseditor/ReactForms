import React from 'react';
import './GenericVariantPage.scss';
import GenericForm from '../../components/Forms/Generic/GenericForm';

const GenericVariantPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Generic Form Variant</h2>
            <GenericForm />
        </div>
    )
}

export default GenericVariantPage;