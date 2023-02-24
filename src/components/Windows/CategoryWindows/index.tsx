import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Item from './components/Item';
import { SORT_TYPE, SortingType } from './constants';

import styles from './styles.module.scss';

function CategoryWindows() {
    const [currentSelected, setCurrentSelected] = useState(SortingType.All);
    const navigate = useNavigate();

    const handleSelect = (id: number) => {
        navigate(`/`);

        setCurrentSelected(id);
    };
    return (
        <div className={styles.container}>
            {SORT_TYPE.map((sort, index) => (
                <div key={sort.id}>
                    <Item
                        onClick={() => handleSelect(sort.id)}
                        onKeyDown={() => handleSelect(sort.id)}
                        label={sort.label}
                    />
                </div>
            ))}
        </div>
    );
}

export default CategoryWindows;
