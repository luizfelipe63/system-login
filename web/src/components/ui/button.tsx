import { type ComponentProps, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ComponentProps<'button'>

export const Button =  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return(
        <button
            {...props}
            ref={ref}
            className={twMerge("bg-blue-600 p-4 rounded-lg text-zinc-100")}
        />
    )
})