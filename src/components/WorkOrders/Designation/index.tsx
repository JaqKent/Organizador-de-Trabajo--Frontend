import { useState } from 'react';
import ReactQuill from 'react-quill';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import { COMMENTS } from '../constants';
import CommentBox from '../WorkItem/components/comment';

import CustomDesignation from './Components/CustomDesignation';
import { SELECT_DESIGNATION } from './constants';

import 'react-quill/dist/quill.snow.css';
import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';

function Designation() {
    const [comment, setComment] = useState('');

    return (
        <>
            <div>
                {SELECT_DESIGNATION.map((select) => (
                    <CustomDesignation
                        label={select.label}
                        value1={select.value1}
                        value2={select.value2}
                        key={select.id}
                    />
                ))}{' '}
            </div>
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
        </>
    );
}

export default Designation;
