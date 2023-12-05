import Link from 'next/link'
import { ComponentProps } from 'react'

interface NavigateLinkProps extends ComponentProps<typeof Link> {
  text: string
}

export function NavigateLink({ text, ...props }: NavigateLinkProps) {
  return (
    <Link
      {...props}
      className="focus:outline-none focus:-translate-y-1 focus:scale-105 focus:shadow-primary focus:shadow-primary-purple focus:rounded focus:bg-primary-blue p-1 transition-all"
    >
      <span className="text-primary-purple font-bold text-base hover:brightness-125 transition-all">
        {text}
      </span>
    </Link>
  )
}
