import CustomLogIn from '~components/CustomLogIn';
import Incidencias from '~components/Incidencias';
import WorkOrders from '~components/WorkOrders';

export const ROUTES = [
    {
        id: 1,
        path: '/',
        element: <CustomLogIn />,
    },
    {
        id: 2,
        path: '/workorders',
        element: <WorkOrders />,
    },
    {
        id: 3,
        path: '/incidencias',
        element: <Incidencias />,
    },
];
