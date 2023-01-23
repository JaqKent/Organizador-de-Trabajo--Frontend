import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface Props {
    title: string;
    children: React.ReactNode;
    event: string;
    defaultEvent: string;
}

function CustomTabs({ title, children, event, defaultEvent }: Props) {
    return (
        <Tabs
            defaultActiveKey={defaultEvent}
            id="fill-tab-example"
            className="mb-4"
            fill
        >
            <Tab eventKey={event} title={title}>
                {children}
            </Tab>
            <Tab eventKey={event} title={title}>
                {children}
            </Tab>
            <Tab eventKey={event} title={title}>
                {children}
            </Tab>
            <Tab eventKey={event} title={title}>
                {children}
            </Tab>
        </Tabs>
    );
}

export default CustomTabs;
