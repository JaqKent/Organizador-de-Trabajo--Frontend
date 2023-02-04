/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

import styles from './styles.module.scss';

import ContentContext from '~context/contentContext/contentContext';

function CommentBox({ item }) {
    const { deleteContent } = useContext(ContentContext);
    return (
        <div className={styles.comment}>
            <div className={styles.top}>
                <div className={styles.user}>
                    <div>
                        {item.user}
                        <img
                            className={styles.img}
                            src={item.img}
                            alt={item.user}
                        />
                    </div>
                    <div>
                        <p>{item.date}</p>
                    </div>
                </div>
                <div className={styles.editClose}>
                    <div>
                        <button type="button">
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() => deleteContent(item.id)}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.text}>{parse(item.comment)}</div>{' '}
        </div>
    );
}

export default CommentBox;
