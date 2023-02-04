/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

import styles from './styles.module.scss';

import ContentContext from '~context/contentContext/contentContext';

function CustomTextContainer({ item }) {
    const { deleteDescription } = useContext(ContentContext);
    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <div>
                    <button
                        type="button"
                        onClick={() => deleteDescription(item.id)}
                    >
                        {' '}
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            </div>

            <div>
                <p>{parse(item.text)}</p>
            </div>
        </div>
    );
}

export default CustomTextContainer;
