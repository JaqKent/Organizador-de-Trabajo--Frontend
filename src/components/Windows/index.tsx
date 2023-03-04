import CategoryWindows from './CategoryWindows';
import Weeks from './Weeks';
import WindowsItem from './WindowsItem';

import styles from './styles.module.scss';

function Windows() {
    return (
        <div className={styles.container}>
            <CategoryWindows />
            <div>
                <Weeks />
            </div>
            <div>
                <WindowsItem />
            </div>
        </div>
    );
}

export default Windows;
