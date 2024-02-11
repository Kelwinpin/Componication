import { PropsWithChildren, ReactElement, useState } from "react"

interface RadioContainerProps extends PropsWithChildren{
    defaultValue?:string
    children?: ReactElement<HTMLInputElement>
}

export function RadioContainer({defaultValue, children}:RadioContainerProps){
    const [value, setValue] = useState("");
    
    const isChecked = () =>{
        if(children?.props.value === value){
            return true
        }else{ 
            return false
        }
    }

    return(
        <div defaultValue={defaultValue}>
            {children?.props.checked = isChecked(children?.props?.value)}
        </div>
    )
}