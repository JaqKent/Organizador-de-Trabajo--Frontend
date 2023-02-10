/* eslint-disable @typescript-eslint/ban-types */
export interface Content {
    id?: string;
    user: string;
    date: string;
    img: string;
    comment: string;
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
