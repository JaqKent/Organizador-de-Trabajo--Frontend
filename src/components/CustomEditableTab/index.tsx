/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Spreadsheet from 'react-spreadsheet';

function CustomEditableTabs() {
    const [data, setData] = useState([
        [{ value: 'Vanilla' }, { value: 'Chocolate' }],
        [{ value: 'Strawberry' }, { value: 'Cookies' }],
    ]);
    return <Spreadsheet data={data} onChange={setData} />;
}

export default CustomEditableTabs;
