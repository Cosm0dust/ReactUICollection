import React, { useState } from 'react';
import s from './ButtonEdit.module.css'

interface ButtonEditProps {
   editing: boolean;
    editText: string;
    saveText: string;
    handleUpdateClick: () => void;
    setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const ButtonEdit: React.FC<ButtonEditProps> = ({ editText, saveText, handleUpdateClick, editing , setEditing}) => {


    return (
        <button className={s.e_button} onClick={editing ? handleUpdateClick : () => setEditing(true)}>
            {editing ? saveText : editText}
        </button>
    );
};

export default ButtonEdit;