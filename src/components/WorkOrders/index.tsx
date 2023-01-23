import React from 'react';

import { WORKITEMS } from './constants';

import CustomTabs from '~components/CustomTabs';

function WorkOrders() {
    return (
        <div>
            {WORKITEMS.map((item) => (
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
                />
            ))}
        </div>
    );
}

export default WorkOrders;
