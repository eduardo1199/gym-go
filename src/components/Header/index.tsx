import { Button } from 'components/Button'

import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

  function handleNavigateToRegister() {
    router.push('/Register')
  }

  return (
    <header className="w-full flex justify-between p-4">
      <img src="" alt="logo" />
      <div className="flex justify-between gap-8">
        <Button.Primary title="about">
          <span>Quem somos</span>
        </Button.Primary>
        <Button.Primary onClick={handleNavigateToRegister} title="register">
          <span>Cadastro</span>
        </Button.Primary>
        <Button.Primary title="login">
          <span>Entrar</span>
        </Button.Primary>
      </div>
    </header>
  )
}
