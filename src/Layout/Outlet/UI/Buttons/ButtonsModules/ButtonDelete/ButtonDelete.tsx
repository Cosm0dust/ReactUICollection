import React from 'react';
import s from './ButtonDelete.module.css'

interface ButtonDeleteProps {
    handleDeleteClick : () => void ;
    deleteText: string;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ handleDeleteClick, deleteText }) => {
    return (
        <button className={s.d_button} onClick={() => handleDeleteClick()}>
            {deleteText}
        </button>
    );
};

export default ButtonDelete;