import { ButtonHTMLAttributes, ReactNode } from 'react'

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function SecondaryButton({ children, ...props }: SecondaryButtonProps) {
  return (
    <button
      {...props}
      className="p-2 rounded ease-in duration-300 hover:bg-transparent hover:shadow-lg hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105 animate-visible focus:outline-none border-none focus:-translate-y-1 focus:scale-105 focus:shadow-lg focus:shadow-tertiary-purple focus:text-primary-purple focus:bg-secondary-blue text-primary-purple hover:text-secondary-blue font-bold text-lg bg-secondary-blue w-full"
    >
      {children}
    </button>
  )
}
