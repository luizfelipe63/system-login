import { type ComponentProps, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'bg-blue-600 p-4 rounded-lg text-zinc-100 cursor-pointer',

  variants: {
    color: {
      primary: 'bg-blue-600 text-zinc-100',
      secondary: 'bg-blue-100 text-zinc-900'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    },
    compoundVariants: [
      {
        size: ['sm', 'md'],
        class: 'px-3 py-1'
      }
    ],
    defaultVariants: {
      size: 'md',
      color: 'primary'
    }
  }
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ color, size, className })}
      />
    )
  },
)
