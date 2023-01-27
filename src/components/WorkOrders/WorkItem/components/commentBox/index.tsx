import styles from './styles.module.scss';

interface Props {
    text: string;
    date: string;
    user: string;
}

function CommentBox({ text, date, user }: Props) {
    return (
        <div className={styles.comment}>
            <div className={styles.top}>
                <div>{user} </div>
                <div>{date}</div>
            </div>
            <div className={styles.text}>{text}</div>{' '}
            <div className={styles.breakLine} />
        </div>
    );
}

export default CommentBox;
