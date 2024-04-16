import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, children, error, ...props }, ref) => {
    return (
      <div>
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
            `flex w-full rounded-md border-input bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-opacity-70 placeholder:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-primary-gray font-bold border  placeholder:text-tertiary-gray focus:border-gray-200 ${
              error ? 'border-red-500' : 'border-tertiary-gray'
            }`,
            className,
          )}
          ref={ref}
          {...props}
        />
        {children}
      </div>
    )
  },
)
InputBase.displayName = 'Input'

export { InputBase }
