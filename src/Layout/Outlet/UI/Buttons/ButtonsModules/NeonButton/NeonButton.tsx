import React, {MouseEvent, useState} from 'react';
import s from './NeonButton.module.css'

interface NeonButtonProps {
    onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
    text: string;
}

const NeonButton = ({ onClick, text }: NeonButtonProps) => {


    return (
       <div >
           <button className={s.neonButton} onClick={onClick}>{text}</button>
       </div>
    );
};

export default NeonButton;