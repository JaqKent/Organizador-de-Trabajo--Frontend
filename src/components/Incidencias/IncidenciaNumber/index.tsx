import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CustomModal from '~components/CustomModal';
import ContentContext from '~context/contentContext/contentContext';

function IncidenciaNumber() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { addOrder } = useContext(ContentContext);
    const [text, setText] = useState('');
    const [numberLink, setNumberLink] = useState(0);

    const handleLinkNumber = () => {
        setNumberLink(numberLink + 1);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim().length > 6) {
            const newDescription = {
                text,
                numberLink,
            };
            addOrder(newDescription);
            setText('');
            numberLink.toString();
        }
    };
    return (
        <>
            <CustomModal
                show={show}
                handleClose={handleClose}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                onClick={() => {
                    handleClose();
                    handleLinkNumber();
                }}
                label="Nueva Orden"
                title="Agregar Orden"
            />
            <div className={styles.container}>
                <ButtonWithIcon
                    label="Agregar Orden"
                    icon={faPlus}
                    onClick={handleShow}
                />
                <div>
                    <ButtonWithIcon label="Editar Orden" icon={faEdit} />
                </div>
            </div>
        </>
    );
}
export default IncidenciaNumber;
