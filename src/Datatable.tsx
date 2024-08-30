import {useEffect, useState} from 'react';
import {lookUpValue, messageData} from './utils.ts';
import Row from './Row.tsx';

interface DatatableProps {
    data: Array<Array<string | number | Array<string>>>;
}

function Datatable({ data }: DatatableProps) {
    const [model, setModel] = useState<Record<string, Record<string, any>>>({});

    useEffect(() => {
        setModel(messageData(data));
    }, [data])

    /**
     * Modifying the referenced key value should update
     * the other disabled keys input values
     * Ex: Modifying River.Level3.LineWidth should auto update
     * Tributary.LineWidth as they are linked
     */
    const handleInputChange = (key: any, event: any) => {
        console.log('args > ', { key, event });

        // logic to update model as soon as input changes
        model[key] = {
            ...model[key],
            value: event.target.value
        }
        setModel({...model});
        console.log('model', model);
    };

    console.log('props.data >> ', data);

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Key</th>
                <th scope="col">Value</th>
            </tr>
            </thead>
            <tbody>
            {
                Object.entries(model).map(([_key, {refer, value}]: Array<any>) => {
                    const val = lookUpValue(value, refer, model)
                    return (
                        <Row _key={_key} _value={val} key={_key} onChange={handleInputChange} refer={refer}/>
                    );
                })
            }
            </tbody>
        </table>
    );
}

export default Datatable;
