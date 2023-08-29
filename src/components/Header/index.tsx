import { Button } from 'Button'

export function Header() {
  return (
    <header className="w-full flex justify-between p-4">
      <img src="" alt="logo" />
      <div className="flex justify-between gap-8">
        <Button.Primary>Quem somos</Button.Primary>
        <Button.Primary>Cadastro</Button.Primary>
        <Button.Primary>Entrar</Button.Primary>
      </div>
    </header>
  )
}
