"use client"

import { MouseEventHandler } from "react"

export interface ButtomProps {
    isDisabled?: boolean
    btnType?: "button" | "submit"
    containerStyles?: string
    textStyles?: string
    title: string
    rightIcon?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
}