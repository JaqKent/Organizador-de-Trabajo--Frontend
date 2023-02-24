import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CustomModal from '~components/CustomModal';
import ContentContext from '~context/contentContext/contentContext';

function AddCRQ() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { addCrq } = useContext(ContentContext);
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
            const newCrq = {
                text,
                numberLink,
            };
            addCrq(newCrq);
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
                label="Nuevo CRQ"
                title="Agregar CRQ"
            />
            <div className={styles.container}>
                <ButtonWithIcon
                    label="Agregar CRQ"
                    icon={faPlus}
                    onClick={handleShow}
                />
                <div>
                    <ButtonWithIcon label="Editar CRQ" icon={faEdit} />
                </div>
            </div>
        </>
    );
}
export default AddCRQ;
