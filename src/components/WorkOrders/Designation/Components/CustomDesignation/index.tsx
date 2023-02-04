import Form from 'react-bootstrap-v5/lib/esm/Form';

import styles from './styles.module.scss';

interface Props {
    label: string;
    value1: string;
    value2: string;
}

function CustomDesignation({ label, value1, value2 }: Props) {
    return (
        <div className={styles.container}>
            <Form.Select aria-label="Default select example">
                <option>{label}</option>
                <option value="1">{value1}</option>
                <option value="2">{value2}</option>
            </Form.Select>
        </div>
    );
}

export default CustomDesignation;
