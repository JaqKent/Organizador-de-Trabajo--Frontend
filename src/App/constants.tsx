import WorkOrders from '~components/WorkOrders';

export const ROUTES = [
    {
        id: 1,
        path: '/',
        element: '¡Home!',
    },
    {
        id: 2,
        path: '/workorders',
        element: <WorkOrders />,
    },
];
