import Designation from '../components/WorkOrders/Designation';

import IncidenciasItem from '~components/Incidencias/IncidenciasItem';
import CustomDescription from '~components/WorkOrders/Description';
import OrderNumber from '~components/WorkOrders/OrderNumber';

export const WORKITEMS = [
    {
        id: 1,
        title1: 'Descripcion /Fecha de Apertura / Modificacion',
        event1: 'Descripcion ',
        title2: 'Designación / Estado y Observaciones',
        event2: 'Designación',
        defaultEvent: 'Designación',
        children1: <CustomDescription />,
        children2: <Designation />,
    },
];

export const INCIDENCIAS = [
    {
        id: 1,
        title1: 'N° de Incidencia',
        event1: 'N° de Incidencia',
        title2: 'Descripcion / Criticidad /Fecha de Apertura / Modificacion',
        event2: 'Descripcion / Criticidad /Fecha de Apertura / Modificacion',
        title3: 'Designación / Estado y Observaciones',
        event3: 'Designación / Estado y Observaciones',
        defaultEvent: 'N° de Incidencia',
        children1: <IncidenciasItem />,
        children2: <CustomDescription />,
        children3: <Designation />,
    },
];
export const PANELLINKS = [
    {
        id: 1,
        eventKey: '#1',
    },
    {
        id: 2,
        eventKey: '#2',
    },
    {
        id: 3,
        eventKey: '#3',
    },
    {
        id: 4,
        eventKey: '#4',
    },
    {
        id: 5,
        eventKey: '#5',
    },
    {
        id: 6,
        eventKey: '#6',
    },
    {
        id: 7,
        eventKey: '#7',
    },
];
