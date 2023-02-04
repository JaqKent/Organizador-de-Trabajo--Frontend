/* eslint-disable react/require-default-props */
import { Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

interface Props {
    name: string;
    label: string;
    type: string;
    error?: string;
    pattern?: string;
    title?: string;
    className?: string;
    onChange?: () => void;
    value?: string;
    required?: boolean;
}

function CustomInput({
    name,
    label,
    type,
    error,
    pattern,
    title,
    className,
    onChange,
    value,
    required,
}: Props) {
    return (
        <Form.Group className={className} controlId={name}>
            <Form.Label>{label}</Form.Label>
            {type === 'textarea' ? (
                <ReactQuill theme="snow" value={value} onChange={onChange} />
            ) : (
                <Form.Control
                    onChange={onChange}
                    name={name}
                    type={type}
                    pattern={pattern}
                    title={title}
                    value={value}
                    required={required}
                />
            )}
            <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
    );
}

export default CustomInput;
