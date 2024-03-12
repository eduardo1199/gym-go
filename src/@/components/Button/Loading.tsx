import { cn } from '@/lib/utils'
import { LoaderIcon } from 'lucide-react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonLoadingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

export function ButtonLoading({
  className,
  children,
  ...props
}: ButtonLoadingProps) {
  return (
    <button
      {...props}
      className={cn(
        `p-2 rounded font-bold text-lg  w-full flex items-center justify-center gap-4 animate-visible bg-gray-600 disabled:cursor-not-allowed text-gray-500`,
        className,
      )}
    >
      <LoaderIcon className="animate-spin text-primary-blue" />

      {children || null}
    </button>
  )
}
