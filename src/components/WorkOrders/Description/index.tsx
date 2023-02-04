import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import 'react-quill/dist/quill.snow.css';
import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CustomTextContainer from '~components/CustomTextContainer';
import ContentContext from '~context/contentContext/contentContext';

function CustomDescription() {
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
