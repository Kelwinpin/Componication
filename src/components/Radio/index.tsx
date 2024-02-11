import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

const styles= stylex.create({
    radioButton:{
        width:"16px",
        height:"16px"
    },
    container:{
        display:"flex",
        alignContent:"center",
    },
    label:{
        fontSize:"18px",
    }
});

interface radioButtonProps{
    label?:string,
    value: string;
}

export function Radio({label, value}:radioButtonProps){
    const [checked, setChecked] = useState<boolean>(false);
    return(
    <div {...stylex.props(styles.container)}>
        <div>        
            <input type="radio" value={value} checked={checked} onClick={()=>setChecked(!checked)} {...stylex.props(styles.radioButton)}/>
        </div>  
        <label {...stylex.props(styles.label)}>{label}</label>
    </div>   
    )
}