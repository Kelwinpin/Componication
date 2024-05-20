import { InputHTMLAttributes } from "react"
import {TextField as StyledTextField} from "./styles.ts"


type textfieldProps = InputHTMLAttributes<HTMLInputElement>

export function TextField({...props}: textfieldProps){
    return(
        <StyledTextField {...props}/>
    )
}