/* eslint-disable react/require-default-props */
import Form from 'react-bootstrap-v5/lib/esm/Form';

import styles from './styles.module.scss';

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
}

function CustomDesignation({
    label,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
}: Props) {
    return (
        <div className={styles.container}>
            <Form.Select aria-label="Default select example">
                <option>{label}</option>
                <option value="1">{value1}</option>
                <option value="2">{value2}</option>
                <option value="3">{value3}</option>
                <option value="4">{value4}</option>
                <option value="5">{value5}</option>
                <option value="6">{value6}</option>
                <option value="7">{value7}</option>
                <option value="8">{value8}</option>
            </Form.Select>
        </div>
    );
}

export default CustomDesignation;
