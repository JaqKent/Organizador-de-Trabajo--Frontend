/* eslint-disable @typescript-eslint/ban-types */
export interface Content {
    id: number;
    user: string;
    date: string;
    img: string;
    comment: string;
}
export interface ContentEdit {
    item: Content[] | null;
    edit: boolean;
}
export interface Order {
    id?: string;
    text: string;
    numberLink?: string;
}

export interface Description {
    id?: string;
    text: string;
}
export interface Incidencia {
    id?: string;
    text: string;
    numberLink?: string;
}
export interface Week {
    id?: string;
    text: string;
    numberLink?: string;
    categoy: string;
}
export interface CRQ {
    id?: string;
    text: string;
    numberLink?: string;
}
