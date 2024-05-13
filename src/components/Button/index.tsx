import * as stylex from "@stylexjs/stylex";
import { PropsWithChildren } from "react";

export interface ButttonProps extends PropsWithChildren{
    variant?: "default" | "outlined",
    size?: "small" | "medium" | "large",
}


const styles = stylex.create({
    default:{
        fontSize:"20px",
        color:"#FFF",
        height:"40px",
        backgroundColor: "#0247c0",
        border:"none",
        cursor:"pointer",
    },
    outlined:{
        fontSize:"20px",
        color:"#0247c0",
        borderRadius:"4px",
        height:"40px",
        backgroundColor:{
            default:"#FFF",
            ":hover":"rgba(2, 71, 192,0.2)"         
        },
        border: "2px solid #0247c0",
        cursor:"pointer",
    },
    small:{
        width:"60px",
    },
    medium:{
        width:"120px"
    },
    large:{
        width:"180px"
    }
});

export function Button({children, variant="outlined", size="medium"}: ButttonProps) {
    return(<button {...stylex.props(styles[variant], styles[size])}>{children}</button>);
}

