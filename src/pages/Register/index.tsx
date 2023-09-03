import { Button } from 'components/Button'

export default function RegisterManager() {
  return (
    <main className="w-full h-screen bg-primary-blue flex">
      <div className="h-full w-1/3 bg-primary-purple flex justify-center items-center flex-col gap-20 p-5">
        <strong className="text-2xl animate-visible">
          O que você mais deseja?
        </strong>
        <Button.Secondary>Administrar minha academia</Button.Secondary>
        <Button.Secondary>Uma academia mais próxima de mim</Button.Secondary>
      </div>
      <div className="flex flex-1">
        <header>
          <div>
            <strong className="text-5xl font-bold text-primary-white animate-visible">
              Gym<span className="text-primary-purple">Go</span>
            </strong>
          </div>
        </header>
        <div></div>
      </div>
    </main>
  )
}
