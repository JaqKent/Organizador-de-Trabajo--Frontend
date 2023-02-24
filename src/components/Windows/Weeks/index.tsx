import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CustomModal from '~components/CustomModal';
import ContentContext from '~context/contentContext/contentContext';

function Weeks() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { addWeek } = useContext(ContentContext);
    const [text, setText] = useState('');
    const [numberLink, setNumberLink] = useState(0);
    const CATEGORY_STRING = 'categoryString';
    const [category, setCategory] = useState({
        category: 0,
        [CATEGORY_STRING]: '',
    });

    const handleLinkNumber = () => {
        setNumberLink(numberLink + 1);
    };
    const handleDrop = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === CATEGORY_STRING) {
            setCategory((prevState) => ({
                ...prevState,
                [CATEGORY_STRING]: value,
            }));
        } else {
            setCategory((prevState) => ({
                ...prevState,
                category: Number(value),
            }));
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim().length > 6) {
            const newWeek = {
                text,
                numberLink,
                category,
            };
            addWeek(newWeek);
            setText('');
            numberLink.toString();
        }
    };

    return (
        <>
            <CustomModal
                drop
                show={show}
                handleClose={handleClose}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                onClick={() => {
                    handleClose();
                    handleLinkNumber();
                }}
                handleDrop={handleDrop}
                categoryString={CATEGORY_STRING}
                value={category.categoryString}
                label="Nueva Semana"
                title="Agregar Semana"
            />
            <div className={styles.container}>
                <ButtonWithIcon
                    label="Agregar Semana"
                    icon={faPlus}
                    onClick={handleShow}
                />
                <div>
                    <ButtonWithIcon label="Editar Semana" icon={faEdit} />
                </div>
            </div>
        </>
    );
}
export default Weeks;
