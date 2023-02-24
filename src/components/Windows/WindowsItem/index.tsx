import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import CRQ from '../Crq';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import ContentContext from '~context/contentContext/contentContext';

function WindowsItems() {
    const { week, deleteWeek } = useContext(ContentContext);
    return (
        <div>
            <Accordion defaultActiveKey="0" flush>
                {week.map((weekItem) => (
                    <Accordion.Item
                        className={styles.container}
                        eventKey={weekItem.numberLink}
                        key={weekItem.id}
                    >
                        <div className={styles.acordeon}>
                            <Accordion.Header>{weekItem.text}</Accordion.Header>
                            <ButtonWithIcon
                                className={styles.button}
                                variant="danger"
                                icon={faClose}
                                onClick={() => deleteWeek(weekItem.id)}
                            />{' '}
                        </div>
                        <Accordion.Body>
                            <CRQ />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default WindowsItems;
