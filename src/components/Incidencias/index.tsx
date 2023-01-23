import React from 'react';

import CustomTabs from '~components/CustomTabs';
import { INCIDENCIAS } from '~constants/constants';

function Incidencias() {
    return (
        <div>
            {INCIDENCIAS.map((item) => (
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
                    children3={item.children3}
                    children4={item.children4}
                />
            ))}
        </div>
    );
}

export default Incidencias;
