'use client'

import { ComponentState, FC, useEffect, useState } from "react";

interface Input {
    placeholderInput: string,
    value?: string,
    setValue?: ComponentState
    disable?: boolean,
    name?: string,
    classNameInp: string,
    classNameCnt?: string,
    animation?: boolean,
    typeInp: string
}

const Input: FC<Input> = ({placeholderInput, typeInp, setValue, classNameCnt, value, disable=false, name, classNameInp, animation=true}) => {
    const [placeholderClass, setPlaceholderClass] = useState("text-[rgb(201, 201, 201)] absolute mt-[3px] text-sm pointer-events-none ml-3")
    const [placeholderValue, setPlaceholderValue] = useState(placeholderInput)

    useEffect(() => {
        if (animation) {
            if (value) {
                setPlaceholderClass("text-[rgb(245, 245, 245)] absolute -mt-5 text-sm transition-all duration-200 ease-in-out")
            } else {
                setPlaceholderClass("text-[rgb(201, 201, 201)] absolute mt-[3px] text-sm pointer-events-none ml-3 transition-all duration-200 ease-in-out")
            }
        } else {
            if (value) {
                setPlaceholderValue("")
            } else {
                setPlaceholderValue(placeholderInput)
            }
        }
        
    }, [value])

    return (
        <label className={classNameCnt} htmlFor={name}>
            <div className={placeholderClass}>{placeholderValue}</div>
            <input autoComplete="off" name={name} className={classNameInp} onChange={el => setValue(el.target.value)} type={typeInp} value={value} disabled={disable}/>
        </label>
    )
}

export default Input