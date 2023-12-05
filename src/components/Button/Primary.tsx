import { ButtonHTMLAttributes, ReactNode } from 'react'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className="p-2 rounded ease-in duration-300 hover:bg-secondary-blue hover:shadow-primary hover:shadow-primary-purple hover:-translate-y-1 hover:scale-105 animate-visible focus:outline-none border-none focus:-translate-y-1 focus:scale-105 focus:shadow-primary focus:shadow-primary-purple focus:bg-secondary-blue text-primary-purple font-bold text-base"
    >
      {children}
    </button>
  )
}
