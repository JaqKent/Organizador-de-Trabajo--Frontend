import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import WorkItems from './WorkItem';

import styles from './styles.module.scss';

function WorkOrders() {
    return (
        <div className={styles.container}>
            <div>
                <WorkItems />
            </div>
        </div>
    );
}

export default WorkOrders;
