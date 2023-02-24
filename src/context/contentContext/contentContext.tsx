/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { createContext, ReactNode, useEffect, useState } from 'react';
import {
    Content,
    ContentEdit,
    CRQ,
    Description,
    Incidencia,
    Order,
    Week,
} from 'interface/Contents';

interface ContextProps {
    content: Content[];
    crq: CRQ[];
    incidencia: Incidencia[];
    description: Description[];
    order: Order[];
    contentEdit: ContentEdit[];
    week: Week[];
    addContent: (newContent: any) => void;
    addWeek: (newWeek: any) => void;
    addCrq: (newCrq: any) => void;
    addIncidencia: (newIncidencia: any) => void;
    addDescription: (newDescription: any) => void;
    addOrder: (newOrder: any) => void;
    deleteContent: (content: any) => void;
    deleteWeek: (content: any) => void;
    deleteCrq: (content: any) => void;
    deleteIncidencia: (content: any) => void;
    deleteDescription: (content: any) => void;
    deleteOrder: (content: any) => void;
    editContent: (content: Content[] | null) => void;
    updateContent: (id: number, updItem: Content) => void;
}

const ContentContext = createContext<ContextProps>({
    incidencia: [],
    crq: [],
    week: [],
    content: [],
    description: [],
    order: [],
    contentEdit: [],
    addContent: () => {},
    addWeek: () => {},
    addCrq: () => {},
    addIncidencia: () => {},
    addDescription: () => {},
    addOrder: () => {},
    deleteContent: () => {},
    deleteWeek: () => {},
    deleteCrq: () => {},
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
    const [week, setWeek] = useState([]);
    const [crq, setCrq] = useState([]);
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
    useEffect(() => {
        fetchWeek();
    }, []);
    useEffect(() => {
        fetchCrq();
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
    const fetchWeek = async () => {
        const response = await fetch(`http://localhost:3000/week`);
        const data = await response.json();
        setWeek(data);
    };
    const fetchCrq = async () => {
        const response = await fetch(`http://localhost:3000/crq`);
        const data = await response.json();
        setCrq(data);
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
    const addIncidencia = async (newIncidencia: never[]) => {
        const response = await fetch('http://localhost:3000/incidencia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newIncidencia),
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
    const addOrder = async (newOrder: never[]) => {
        const response = await fetch('http://localhost:3000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        });
        const data = await response.json();
        setOrder([data, ...order]);
    };
    const addWeek = async (newWeek: Content) => {
        const response = await fetch('http://localhost:3000/week', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWeek),
        });
        const data = await response.json();
        setWeek([data, ...week]);
    };
    const addCrq = async (newCrq: Content) => {
        const response = await fetch('http://localhost:3000/crq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCrq),
        });
        const data = await response.json();
        setWeek([data, ...crq]);
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
    const deleteWeek = async (id: number) => {
        if (window.confirm('¿Seguro que quieres borrar la Semana?')) {
            await fetch(`http://localhost:3000/week/${id}`, {
                method: 'DELETE',
            });
            setWeek(week.filter((item) => item.id !== id));
        }
    };
    const deleteCrq = async (id: number) => {
        if (window.confirm('¿Seguro que quieres borrar el CRQ?')) {
            await fetch(`http://localhost:3000/crq/${id}`, {
                method: 'DELETE',
            });
            setCrq(crq.filter((item) => item.id !== id));
        }
    };
    const updateContent = async (id: number, updItem: Content) => {
        const response = await fetch(`http://localhost:3000/content/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        });
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
                week,
                crq,
                addCrq,
                addWeek,
                deleteCrq,
                deleteWeek,
            }}
        >
            {children}
        </ContentContext.Provider>
    );
}

export default ContentContext;
