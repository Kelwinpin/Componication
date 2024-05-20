import { useState } from "react";
import { Radio as StyledRadio, Container, Label } from "./styles";

interface radioButtonProps{
    label?:string,
    value: string;
}

export function Radio({label, value}:radioButtonProps){
    const [checked, setChecked] = useState<boolean>(false);
    return(
    <Container>
        <div>        
            <StyledRadio type="radio" value={value} checked={checked} onClick={()=>setChecked(!checked)}/>
        </div>  
        <Label>{label}</Label>
    </Container>   
    )
}