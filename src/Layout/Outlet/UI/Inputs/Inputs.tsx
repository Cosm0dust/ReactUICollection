import React from 'react';
import s from './Inputs.module.css'
import FlyPlaceholder from "./InputsModules/FlyPlaceholder/FlyPlaceholder";
import BlueInput from "./InputsModules/BlueInput/BlueInput";
import DateInput from "./InputsModules/DateInput/DateInput";

const Buttons = () => {
    return (
        <div className={s.inputs}>
            <div className={s.inputs__side}>
                Side Topics
            </div>
            <div className={s.inputs__layOut}>
                    <h1>CssOnly</h1>
                <div className={s.template}>
                    <div className={s.inputsWrapper}>
                        <BlueInput value={''} placeholder={''} onChange={undefined}/>
                    </div>
                    <div  className={s.inputsWrapper}>
                        <FlyPlaceholder value={''} placeholder={'testText'} onChange={undefined}/>
                    </div>
                    <div  className={s.inputsWrapper}>
                        <DateInput value={''} onChange={undefined}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Buttons;