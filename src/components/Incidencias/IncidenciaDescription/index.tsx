import React from 'react';

import CustomDescription from '~components/CustomDescription';

function IncidenciaDescription() {
    return (
        <div>
            <CustomDescription
                title="Criticidad"
                critic
                value1="Critico"
                value2="Alto"
                value3="Medio"
                value4="Bajo"
            />
        </div>
    );
}

export default IncidenciaDescription;
