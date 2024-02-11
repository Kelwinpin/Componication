import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    checkbox:{
        width:"32px",
        height:"32px",
    },
    checkboxContainer:{
        fontSize:"20px",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:"4px"
    }
});

export function Checkbox(){
    return(
    <div {...stylex.props(styles.checkboxContainer)}>
        <div>
            <input type="checkbox" {...stylex.props(styles.checkbox)}/>
        </div>
        <label>Check</label>
    </div>
    );
}