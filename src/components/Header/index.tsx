import { NavigateLink } from 'components/NavigateLink'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full flex justify-between p-4">
      <img src="" alt="logo" />
      <div className="flex justify-between gap-8 p-2">
        <NavigateLink href="/about" text="Quem somos" title="about" />
        <NavigateLink href="/register" text="Cadastro" title="register" />
        <NavigateLink href="/login" text="Entrar" title="login" />
      </div>
    </header>
  )
}
