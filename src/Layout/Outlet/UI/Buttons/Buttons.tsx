import React from 'react';
import s from './Buttons.module.css'
import Input1 from "../Inputs/InputsModules/Input1/Input1";
import Button1 from "./ButtonsModules/Button1/Button1";
import Button2 from "./ButtonsModules/Button2/Button2";

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
                        <Button1 text={'testText'} onClick={undefined}/>
                        <Button2 onClick={undefined} text={''} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;