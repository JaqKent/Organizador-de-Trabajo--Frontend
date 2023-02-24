import styles from './styles.module.scss';

interface Props {
    label: string;
    onClick: () => void;
    onKeyDown: () => void;
}

function Item({ onClick, label, onKeyDown }: Props) {
    return (
        <div
            className={styles.container}
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            {label}
        </div>
    );
}

export default Item;
