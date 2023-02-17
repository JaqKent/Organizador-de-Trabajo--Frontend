import Designation from '../components/WorkOrders/Designation';

import IncidenciaDescription from '~components/Incidencias/IncidenciaDescription';
import OrderDescription from '~components/WorkOrders/OrderDescription/Index';

export const WORKITEMS = [
    {
        id: 1,
        title1: 'Descripcion /Fecha de Apertura / Modificacion',
        event1: 'Descripcion ',
        title2: 'Designación / Estado y Observaciones',
        event2: 'Designación',
        defaultEvent: 'Designación',
        children1: <OrderDescription />,
        children2: <Designation />,
    },
];

export const INCIDENCIAS = [
    {
        id: 1,
        title1: 'Descripcion / Criticidad /Fecha de Apertura / Modificacion',
        event1: 'Descripcion',
        title2: 'Designación / Estado y Observaciones',
        event2: 'Designación',
        defaultEvent: 'Designación',
        children1: <IncidenciaDescription />,
        children2: <Designation />,
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
