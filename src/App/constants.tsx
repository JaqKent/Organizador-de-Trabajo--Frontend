import Incidencias from '~components/Incidencias';
import LogIn from '~components/screens/Auth/LogIn';
import LogOut from '~components/screens/Auth/LogOut';
import Windows from '~components/Windows';
import WorkOrders from '~components/WorkOrders';

export const ROUTES = [
    {
        id: 0,
        path: '/',
        element: 'Home',
    },
    {
        id: 1,
        path: '/login',
        element: <LogIn />,
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
    {
        id: 4,
        path: '/ventanas',
        element: <Windows />,
    },
    {
        id: 5,
        path: '/logout',
        element: <LogOut />,
    },
];
