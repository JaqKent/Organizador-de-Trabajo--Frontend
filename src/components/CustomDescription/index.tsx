/* eslint-disable react/require-default-props */
import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import 'react-quill/dist/quill.snow.css';
import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CustomDesignation from '~components/CustomDesignation';
import CustomTextContainer from '~components/CustomTextContainer';
import ContentContext from '~context/contentContext/contentContext';

interface Props {
    label?: string;
    value1?: string;
    value2?: string;
    value3?: string;
    value4?: string;
    value5?: string;
    value6?: string;
    value7?: string;
    value8?: string;
    critic?: boolean;
    title?: string;
}

function CustomDescription({
    label,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    critic,
    title,
}: Props) {
    const { description, addDescription } = useContext(ContentContext);
    const [text, setText] = useState('');

    const handleChange = (value: string) => {
        setText(value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newDescription = {
                text,
            };
            addDescription(newDescription);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.dates}>
                {critic ? (
                    <div>
                        <h3>{title}</h3>
                        <CustomDesignation
                            label={label}
                            value1={value1}
                            value2={value2}
                            value3={value3}
                            value4={value4}
                            value5={value5}
                            value6={value6}
                            value7={value7}
                            value8={value8}
                        />
                    </div>
                ) : null}

                <div>
                    <h3>Fecha de Apertura</h3>
                    <Form.Control type="date" name="Apertura" />
                </div>
                <div>
                    <h3>Fecha de Modificacion</h3>
                    <Form.Control type="date" name="Modificacion" />
                </div>
            </div>
            <div className={styles.description}>
                <div>
                    {description.map((info) => (
                        <CustomTextContainer item={info} key={info.id} />
                    ))}
                </div>
                <div>
                    <div className={styles.low}>
                        <div>
                            <ReactQuill
                                theme="snow"
                                value={text}
                                onChange={handleChange}
                            />
                        </div>
                        <ButtonWithIcon
                            label="Agregar Descripcion"
                            icon={faSave}
                            variant="primary"
                            type="submit"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default CustomDescription;
