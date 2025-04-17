import { type ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'px-4 h-12 bg-white border border-zinc-200 rounded-lg placeholder-zinc-500 outline-none text-sm',
        props.className,
      )}
    />
  )
})
