import Link from 'next/link'
import { ComponentProps } from 'react'

interface NavigateLinkProps extends ComponentProps<typeof Link> {
  text: string
}

export function NavigateLink({ text, ...props }: NavigateLinkProps) {
  return (
    <Link
      {...props}
      className="focus:outline-none focus:-translate-y-1 focus:scale-105 focus:shadow-primary focus:shadow-primary-purple focus:rounded focus:bg-primary-purple p-2 transition-all ease-in duration-300 hover:scale-105 hover:bg-primary-purple rounded text-primary-purple hover:text-primary-blue hover:shadow-primary-purple hover:shadow-primary focus:text-primary-blue"
    >
      <span className="font-bold text-base hover:brightness-125 transition-all">
        {text}
      </span>
    </Link>
  )
}
