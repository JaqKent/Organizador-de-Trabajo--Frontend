/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { createContext, ReactNode, useEffect, useState } from 'react';
import {
    Content,
    ContentEdit,
    Description,
    Incidencia,
    Order,
} from 'interface/Contents';

interface ContextProps {
    content: Content[];
    incidencia: Incidencia[];
    description: Description[];
    order: Order[];
    contentEdit: ContentEdit[];
    addContent: (newContent: any) => void;
    addIncidencia: (newContent: any) => void;
    addDescription: (newContent: any) => void;
    addOrder: (newContent: any) => void;
    deleteContent: (content: any) => void;
    deleteIncidencia: (content: any) => void;
    deleteDescription: (content: any) => void;
    deleteOrder: (content: any) => void;
    editContent: (content: Content[] | null) => void;
    updateContent: (id: number, updItem: Content) => void;
}

const ContentContext = createContext<ContextProps>({
    incidencia: [],
    content: [],
    description: [],
    order: [],
    contentEdit: [],
    addContent: () => {},
    addIncidencia: () => {},
    addDescription: () => {},
    addOrder: () => {},
    deleteContent: () => {},
    deleteIncidencia: () => {},
    deleteDescription: () => {},
    deleteOrder: () => {},
    editContent: () => {},
    updateContent: () => {},
});

export function ContentProvider({ children }: { children: ReactNode }) {
    /*     const [isLoading, setIsLoading] = useState(true); */
    const [content, setContent] = useState<Content[]>([]);
    const [description, setDescription] = useState([]);
    const [order, setOrder] = useState([]);
    const [incidencia, setIncidencia] = useState([]);
    const [contentEdit, setContentEdit] = useState<ContentEdit[]>([
        {
            item: null,
            edit: false,
        },
    ]);

    useEffect(() => {
        fetchContent();
    }, []);
    useEffect(() => {
        fetchOrder();
    }, []);

    useEffect(() => {
        fetchDescription();
    }, []);
    useEffect(() => {
        fetchIncidencia();
    }, []);
    const fetchContent = async () => {
        const response = await fetch(`http://localhost:3000/content`);
        const data = await response.json();
        setContent(data);
    };
    const fetchDescription = async () => {
        const response = await fetch(`http://localhost:3000/description`);
        const data = await response.json();
        setDescription(data);
    };
    const fetchOrder = async () => {
        const response = await fetch(`http://localhost:3000/order`);
        const data = await response.json();
        setOrder(data);
    };
    const fetchIncidencia = async () => {
        const response = await fetch(`http://localhost:3000/incidencia`);
        const data = await response.json();
        setIncidencia(data);
    };

    const addContent = async (newContent: Content) => {
        const response = await fetch('http://localhost:3000/content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContent),
        });
        const data = await response.json();
        setContent([data, ...content]);
    };
    const addIncidencia = async (newContent: never[]) => {
        const response = await fetch('http://localhost:3000/incidencia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContent),
        });
        const data = await response.json();
        setIncidencia([data, ...incidencia]);
    };
    const addDescription = async (newDescription: never[]) => {
        const response = await fetch('http://localhost:3000/description', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDescription),
        });
        const data = await response.json();
        setDescription([data, ...description]);
    };
    const addOrder = async (newDescription: never[]) => {
        const response = await fetch('http://localhost:3000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDescription),
        });
        const data = await response.json();
        setOrder([data, ...order]);
    };
    const deleteContent = async (id: number) => {
        if (window.confirm('¿Seguro que quieres borrar el comentario?')) {
            await fetch(`http://localhost:3000/content/${id}`, {
                method: 'DELETE',
            });
            setContent(content.filter((item) => item.id !== id));
        }
    };
    const deleteDescription = async (id: number) => {
        if (window.confirm('¿Seguro que quieres borrar la Descripcion?')) {
            await fetch(`http://localhost:3000/description/${id}`, {
                method: 'DELETE',
            });
            setDescription(description.filter((item) => item.id !== id));
        }
    };
    const deleteOrder = async (id: number) => {
        if (window.confirm('¿Seguro que quieres borrar el Numero de Orden?')) {
            await fetch(`http://localhost:3000/order/${id}`, {
                method: 'DELETE',
            });
            setOrder(order.filter((item) => item.id !== id));
        }
    };
    const deleteIncidencia = async (id: number) => {
        if (window.confirm('¿Seguro que quieres borrar la incidencia?')) {
            await fetch(`http://localhost:3000/incidencia/${id}`, {
                method: 'DELETE',
            });
            setIncidencia(incidencia.filter((item) => item.id !== id));
        }
    };
    const updateContent = async (id: number, updItem: Content) => {
        const response = await fetch(
            `http://localhost:3000/content/${id}${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updItem),
            }
        );
        const data = await response.json();

        setContent((prevContent) =>
            prevContent.map((item) => (item.id === id ? data : item))
        );
    };

    const editContent = (item: Content[] | null) => {
        setContentEdit([
            {
                item,
                edit: true,
            },
        ]);
    };

    return (
        <ContentContext.Provider
            value={{
                addContent,
                incidencia,
                addIncidencia,
                deleteIncidencia,
                order,
                addOrder,
                deleteOrder,
                content,
                description,
                deleteContent,
                addDescription,
                deleteDescription,
                editContent,
                updateContent,
                contentEdit,
            }}
        >
            {children}
        </ContentContext.Provider>
    );
}

export default ContentContext;
