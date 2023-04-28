import React, {ChangeEventHandler} from 'react';
import s from './FlyPlaceholder.module.css'

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const FlyPlaceholder = ({placeholder, value, onChange} : CustomInputProps) => {
    return (
        <div className={s.inputContainer}>
            <div className={s.inputBox}>
                <input type="text"  value={value} onChange={onChange}/>
                <span>{placeholder}</span>
            </div>
        </div>
    );
};

export default FlyPlaceholder;