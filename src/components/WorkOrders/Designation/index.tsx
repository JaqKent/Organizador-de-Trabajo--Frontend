/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import CustomDesignation from './Components/CustomDesignation';
import { SELECT_DESIGNATION } from './constants';

import 'react-quill/dist/quill.snow.css';
import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CommentBox from '~components/comment';
import ContentContext from '~context/contentContext/contentContext';

function Designation() {
    const { content, addContent } = useContext(ContentContext);
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('2023-01-01');
    const [user, setUser] = useState('DefaultUser');
    const [img, setImg] = useState(
        'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg'
    );
    const handleChange = (value: string) => {
        setComment(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comment.trim().length > 10) {
            const newContent = {
                comment,
                date,
                user,
                img,
            };
            addContent(newContent);
            setComment('');
        }
    };

    return (
        <>
            <div className={styles.designation}>
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
                <div className={styles.commentContainer}>
                    <div>
                        {content.map((data) => (
                            <CommentBox key={data.id} item={data} />
                        ))}
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.low}>
                        <div>
                            <ReactQuill
                                value={comment}
                                onChange={handleChange}
                                theme="snow"
                            />
                        </div>
                        <ButtonWithIcon
                            label="Agregar Comentario"
                            icon={faSave}
                            variant="primary"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Designation;
