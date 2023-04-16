import React from 'react';
import s from './TextAreas.module.css'
import AreaCScroll from "./AreaCScroll/AreaCScroll";

const TextAreas = () => {
    return (
        <div className={s.textAreas}>
            <div className={s.textAreas__side}>
                Side Topics
            </div>
            <div className={s.buttons__layOut}>
                <div className={s.template}>
                    <h1>CssOnly</h1>
                    <div>
                        <AreaCScroll value={''} placeholder={''} onChange={undefined}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextAreas;