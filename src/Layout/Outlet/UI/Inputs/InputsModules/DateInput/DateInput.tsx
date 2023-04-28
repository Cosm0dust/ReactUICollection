import React, {ChangeEventHandler} from 'react';
import s from './DateInput.module.css'

interface DateInputProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const DateInput = ({value, onChange}:DateInputProps) => {
    return (
        <div className={s.dateInput}>
            <input type="date" value={value} onChange={onChange}/>
        </div>
    );
};

export default DateInput;