import { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import AddCRQ from '../AddCRQ';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import CustomTabs from '~components/CustomTabs';
import { PANELLINKS, WINDOWS } from '~constants/constants';
import ContentContext from '~context/contentContext/contentContext';

function CRQ() {
    const { crq, deleteCrq } = useContext(ContentContext);

    return (
        <div className={styles.container}>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#1">
                <Col sm={12}>
                    <ListGroup className={styles.listGroup}>
                        <AddCRQ />
                        {crq.map((item) => (
                            <ListGroup.Item
                                action
                                href={`#${item.numberLink.toString()}`}
                                key={item.id}
                            >
                                <div className={styles.orders}>
                                    {item.text}
                                    <ButtonWithIcon
                                        className={styles.button}
                                        variant="danger"
                                        icon={faClose}
                                        onClick={() => deleteCrq(item.id)}
                                    />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col sm={4}>
                    <Tab.Content className={styles.tabContent}>
                        {PANELLINKS.map((link) => (
                            <Tab.Pane eventKey={link.eventKey} key={link.id}>
                                <div className={styles.tabs}>
                                    {WINDOWS.map((item) => (
                                        <CustomTabs
                                            title1={item.title1}
                                            event1={item.event1}
                                            title2={item.title2}
                                            event2={item.event2}
                                            title3={item.title3}
                                            event3={item.event3}
                                            title4={item.title4}
                                            event4={item.event4}
                                            defaultEvent={item.defaultEvent}
                                            key={item.id}
                                            children1={item.children1}
                                            children2={item.children2}
                                        />
                                    ))}
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Tab.Container>
        </div>
    );
}

export default CRQ;
