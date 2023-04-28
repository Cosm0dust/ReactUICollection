import React, { useState } from 'react';
import s from './ButtonEdit.module.css'

interface ButtonEditProps {
   edit: boolean;
    editText: string;
    saveText: string;
    /*handleUpdateClick: () => void;*/

};

const ButtonEdit: React.FC<ButtonEditProps> = ({ editText, saveText,  edit }) => {
    const [editing, setEditing] = useState(false)



    return (
        <button className={s.e_button} onClick={editing? ()=> setEditing(false) : ()=> setEditing(true)}>
            {editing ? saveText : editText}
        </button>
    );
};

export default ButtonEdit;