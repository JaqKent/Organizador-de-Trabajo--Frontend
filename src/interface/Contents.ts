/* eslint-disable @typescript-eslint/ban-types */
export interface Content {
    id?: string;
    user: string;
    date: string;
    img: string;
    text: string;
}

export interface ContentEdit {
    item: any;
    edit: boolean;
}
