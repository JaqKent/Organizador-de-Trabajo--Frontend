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

export const WINDOWS = [
    {
        id: 1,
        title1: 'Solicitante / Descripcion/ Estado y fecha de Implementacion',
        event1: 'Solicitante',
        title2: 'Ultimo Update / Urgencia / Tipo y Dueño CRQ',
        event2: 'Update',
        title3: 'Ejecutor de Tarea/ Controla / Nueva URL o Flujo/ Grupo Soporte',
        event3: 'Ejecutor',
        title4: 'Pruebas Post(Grupo Remedy) / Afectacion IDP / Impacto - Notificacion / Componente',
        event4: 'Pruebas',
        defaultEvent: 'Solicitante',
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
