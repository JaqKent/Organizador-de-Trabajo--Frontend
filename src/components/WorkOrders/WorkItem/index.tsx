import { useState } from 'react';
import ReactQuill from 'react-quill';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import { COMMENTS } from '../constants';

import CommentBox from './components/commentBox';

import 'react-quill/dist/quill.snow.css';
import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';

function WorkItem() {
    const [comment, setComment] = useState('');

    return (
        <div className={styles.container}>
            <div>
                {COMMENTS.map((item) => (
                    <CommentBox
                        text={item.text}
                        date={item.date}
                        user={item.user}
                        key={item.id}
                    />
                ))}
            </div>
            <div className={styles.editor}>
                <ReactQuill
                    theme="snow"
                    value={comment}
                    onChange={setComment}
                />
            </div>
            <ButtonWithIcon
                label="Guardar"
                icon={faSave}
                variant="primary"
                type="submit"
            />
        </div>
    );
}

export default WorkItem;
