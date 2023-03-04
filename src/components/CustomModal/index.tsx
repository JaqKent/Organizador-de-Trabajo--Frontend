/* eslint-disable react/require-default-props */
import { ChangeEvent, FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import DropdownInput from '~components/DropdownInput';
import { SORTING_LABELS } from '~components/Windows/CategoryWindows/constants';

interface Props {
    drop?: boolean;
    show: boolean;
    handleClose: () => void;
    title: string;
    label: string;
    categoryString: string;
    value?: any;
    onClick: () => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleDrop: (e: ChangeEvent<HTMLSelectElement>) => void;
}
function CustomModal({
    show,
    handleClose,
    title,
    label,
    value,
    onClick,
    handleSubmit,
    handleChange,
    handleDrop,
    drop,
    categoryString,
}: Props) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>{label}</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {drop ? (
                        <DropdownInput
                            name={categoryString}
                            label="Categoria"
                            options={SORTING_LABELS}
                            onChange={handleDrop}
                            value={value}
                        />
                    ) : (
                        ''
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={onClick} type="submit">
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default CustomModal;
