import { useState } from 'react';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CustomModal from '~components/CustomModal';

function OrderNumber() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <CustomModal show={show} handleClose={handleClose} />
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

export default OrderNumber;
