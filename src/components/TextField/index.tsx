import * as stylex from "@stylexjs/stylex"
import { InputHTMLAttributes } from "react"

const styles = stylex.create({
    default:{
        fontSize:"20px",
        borderRadius:"4px",
        width:"240px",
        height:"40px",
        backgroundColor:{
            default:"#FFFFFF"
        },
        borderColor:{
            default:"#0247c0",
        }
    }
})

type textfieldProps = InputHTMLAttributes<HTMLInputElement>

export function TextField({...props}: textfieldProps){
    return(
        <input  {...stylex.props(styles.default)} {...props}/>
    )
}