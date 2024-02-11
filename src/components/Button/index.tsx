import * as stylex from "@stylexjs/stylex";
import { PropsWithChildren } from "react";

interface butttonProps extends PropsWithChildren{
    variant?: "default" | "outlined"
}


const styles = stylex.create({
    default:{
        fontSize:"20px",
        color:{
            default:"transparent",
            ':hover':"#0247c0"
        },
        width:"120px",
        height:"40px",
        backgroundColor:{
            default:"#0247c0",
            ':hover': "#FFFFFF"
        },
        border:"none",
        pointerEvents:"painted"
    },
    outlined:{
        fontSize:"20px",
        color:"#0247c0",
        borderRadius:"4px",
        width:"120px",
        height:"40px",
        backgroundColor:{
            default:"transparent",
            ":hover":"rgba(2, 71, 192,0.2)"         
        },
        border: "2px solid #0247c0",
    }
});

export function Button({children, variant="outlined"}: butttonProps) {
    return(<button {...stylex.props(styles[variant])}>{children}</button>);
}

