import OrderNumber from './OrderNumber';
import WorkItems from './WorkItem';

import styles from './styles.module.scss';

function WorkOrders() {
    return (
        <div className={styles.container}>
            <div>
                <OrderNumber />
            </div>
            <div>
                <WorkItems />
            </div>
        </div>
    );
}

export default WorkOrders;
