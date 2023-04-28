import React from 'react';
import s from './Buttons.module.css'
import Button1 from "./ButtonsModules/Button1/Button1";
import Button2 from "./ButtonsModules/Button2/Button2";
import ButtonDelete from "./ButtonsModules/ButtonDelete/ButtonDelete";
import NeonButton from "./ButtonsModules/NeonButton/NeonButton";
import ButtonEdit from "./ButtonsModules/ButtonEdit/ButtonEdit";
import NeonBorderButton from "./ButtonsModules/NeonBorderButton/NeonBorderButton";

const Buttons = () => {

    return (
        <div className={s.buttons}>
            <div className={s.buttons__side}>
                Side Topics
            </div>
            <div className={s.buttons__layOut}>
                <div className={s.template}>
                    <h1>CssOnly</h1>
                    <div className={s.buttonFlex}>
                        <div className={s.buttonWrapper}>
                            <Button1 text={'testText'} onClick={()=> console.log('Button1')}/>
                        </div>
                        <div className={s.buttonWrapper}>
                            <Button2 onClick={() => console.log('Button2')} text={'LoadText'}/></div>
                        <div className={s.buttonWrapper}>
                        <ButtonDelete handleDeleteClick={()=> console.log('deleteButton')} deleteText={'Delete'}/>
                        </div>
                        <div className={s.buttonWrapper}>
                            <ButtonEdit editText={'e'} saveText={'s'} edit={false} />
                        </div>
                        <div className={s.buttonWrapper} style={{background: 'hsl(323 21% 16%)'}} >
                        <NeonButton onClick={() => console.log('Button2')} text={'Neon'}/>
                        </div>
                        <div className={s.buttonWrapper} style={{background: '#031321'}} >
                            <NeonBorderButton onClick={() => console.log('Button2')} text={'Neon'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;