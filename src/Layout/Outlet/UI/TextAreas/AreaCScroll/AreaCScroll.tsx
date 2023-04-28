import React, { ChangeEvent, FC } from 'react';
import s from './AreaCScroll.module.css'

interface TextAreasProps {
    value: string;
    placeholder: string;
    onChange: ((event: ChangeEvent<HTMLTextAreaElement>) => void) |undefined;
}

const TextAreas: FC<TextAreasProps> = ({ value, placeholder, onChange }) => {
    return (
        <>
            <textarea className={s.area} value={value} placeholder={placeholder} onChange={onChange} />
        </>
    );
};

export default TextAreas;