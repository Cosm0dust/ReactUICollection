import React from 'react';
import s from './Buttons.module.css'
import Input1 from "./InputsModules/Input1/Input1";

const Buttons = () => {
    return (
        <div className={s.buttons}>
            <div className={s.buttons__side}>
                Side Topics
            </div>
            <div className={s.buttons__layOut}>
                <div className={s.template}>
                    <h1>CssOnly</h1>
                    <div>
                        <Input1 value={''} placeholder={''} onChange={undefined}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;