/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-alert */

/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Content } from 'interface/Contents';

interface ContextProps {
    content: Content[];
    addContent: (newContent: any) => void;
    deleteContent: (content: any) => void;
}

const ContentContext = createContext<ContextProps>({
    content: [],
    addContent: () => {},
    deleteContent: () => {},
});

export function ContentProvider({ children }: { children: ReactNode }) {
    /*     const [isLoading, setIsLoading] = useState(true); */
    const [content, setContent] = useState([]);
    /*     const [contentEdit, setContentEdit] = useState({
        item: {},
        edit: false,
    }); */
    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        const response = await fetch(`http://localhost:3000/content`);
        const data = await response.json();
        setContent(data);
    };

    const addContent = async (newContent: any[]) => {
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
    const deleteContent = async (id: number) => {
        if (window.confirm('¿Seguro que quieres borrar el comentario?')) {
            await fetch(`http://localhost:3000/content/${id}`, {
                method: 'DELETE',
            });
            setContent(content.filter((item) => item.id !== id));
        }
    };

    /*     const updateContent = async (id: any, updItem: any) => {
        const response = await fetch(`http://localhost:3000/content/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        });
        const data = await response.json();
        setContent(
            content.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        );
    };

    const editContent = (item: any) => {
        setContentEdit({
            item,
            edit: true,
        });
    }; */

    return (
        <ContentContext.Provider
            value={{
                addContent,
                content,
                deleteContent,
            }}
        >
            {children}
        </ContentContext.Provider>
    );
}

export default ContentContext;
