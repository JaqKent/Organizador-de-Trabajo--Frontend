export const SORTING_LABELS = ['Activo', 'Backlog', 'Cerrado'];

export enum SortingType {
    All,
    Activo,
    Backlog,
    Cerrado,
}

export const SORT_TYPE = [
    {
        id: SortingType.Activo,
        label: 'Activo',
        name: 'Activo',
    },
    {
        id: SortingType.Backlog,
        label: 'Backlog',
        name: 'Backlog',
    },
    {
        id: SortingType.Cerrado,
        label: 'Cerrado',
        name: 'Cerrado',
    },
];
