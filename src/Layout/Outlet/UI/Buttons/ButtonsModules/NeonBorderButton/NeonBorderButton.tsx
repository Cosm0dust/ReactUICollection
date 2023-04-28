import React, {MouseEvent} from 'react';
import s from  './NeonBorderButton.module.css'

interface NeonBorderButtonProps {
    onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
    text: string;
}

const NeonBorderButton = ({ onClick, text } : NeonBorderButtonProps) => {
    return (
        <>
            <button onClick={onClick} className={s.neonBorderButton}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </button>
        </>
    );
};

export default NeonBorderButton;