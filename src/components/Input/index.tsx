import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <>
        {label && (
          <label
            htmlFor={props.id}
            className="text-sm text-primary-blue font-bold"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={props.id}
          className={cn(
            'flex w-full rounded-md border-input bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-opacity-70 placeholder:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-primary-gray font-bold border border-tertiary-gray placeholder:text-tertiary-gray',
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
