import CustomDates from '../components/WorkOrders/CustomDates';
import Designation from '../components/WorkOrders/Designation';
import WorkItem from '../components/WorkOrders/WorkItem';

import IncidenciasItem from '~components/Incidencias/IncidenciasItem';
import CustomDescription from '~components/WorkOrders/Description';

export const WORKITEMS = [
    {
        id: 1,
        title1: 'N° de orden',
        event1: 'N° de orden',
        title2: 'Descripcion',
        event2: 'Descripcion',
        title3: 'Fecha de Apertura / Modificacion',
        event3: 'Fecha de Apertura / Modificacion',
        title4: 'Designación / Estado y Observaciones',
        event4: 'Designación / Estado y Observaciones',
        defaultEvent: 'N° de orden',
        children1: <WorkItem />,
        children2: <CustomDescription />,
        children3: <CustomDates />,
        children4: <Designation />,
    },
];

export const INCIDENCIAS = [
    {
        id: 1,
        title1: 'N° de Incidencia',
        event1: 'N° de Incidencia',
        title2: 'Descripcion / Criticidad',
        event2: 'Descripcion / Criticidad',
        title3: 'Fecha de Apertura / Modificacion',
        event3: 'Fecha de Apertura / Modificacion',
        title4: 'Designación / Estado y Observaciones',
        event4: 'Designación / Estado y Observaciones',
        defaultEvent: 'N° de Incidencia',
        children1: <IncidenciasItem />,
        children2: <CustomDescription />,
        children3: <CustomDates />,
        children4: <Designation />,
    },
];
