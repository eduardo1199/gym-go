import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <>
        <label htmlFor={props.id} className="text-base text-white font-bold">
          {label}
        </label>
        <input
          type={type}
          id={props.id}
          className={cn(
            'flex h-10 w-full rounded-md border-input bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-primary-purple text-white font-bold placeholder:text-white shadow-sm shadow-primary-purple',
            className,
          )}
          ref={ref}
          {...props}
        />
      </>
    )
  },
)
Input.displayName = 'Input'

export { Input }
