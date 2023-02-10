/* eslint-disable react/require-default-props */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface Props {
    title1: string;
    children1: React.ReactNode;
    event1: string;
    title2?: string;
    children2?: React.ReactNode;
    event2?: string;
    title3?: string;
    children3?: React.ReactNode;
    event3?: string;
    title4?: string;
    children4?: React.ReactNode;
    event4?: string;
    defaultEvent?: string;
}

function CustomTabs({
    title1,
    children1,
    event1,
    title2,
    children2,
    event2,
    title3,
    children3,
    event3,
    title4,
    children4,
    event4,
    defaultEvent,
}: Props) {
    return (
        <Tabs
            defaultActiveKey={defaultEvent}
            id="fill-tab-example"
            className="mb-4"
            fill
        >
            <Tab eventKey={event1} title={title1}>
                {children1}
            </Tab>
            <Tab eventKey={event2} title={title2}>
                {children2}
            </Tab>
            <Tab eventKey={event3} title={title3}>
                {children3}
            </Tab>
            <Tab eventKey={event4} title={title4}>
                {children4}
            </Tab>
        </Tabs>
    );
}

export default CustomTabs;
