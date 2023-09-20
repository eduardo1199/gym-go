import { Button } from 'components/Button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'components/HoverCard'
import { ManagerForm } from './components/ManagerForm'

export default function RegisterManager() {
  return (
    <main className="w-full h-screen bg-primary-blue flex">
      <div className="h-full w-1/3 bg-white flex justify-center items-center flex-col gap-20 p-5">
        <strong className="text-2xl animate-visible">
          O que você mais deseja?
        </strong>
        <Button.Secondary>Administrar minha academia</Button.Secondary>
        <Button.Secondary>Uma academia mais próxima de mim</Button.Secondary>
      </div>
      <div className="flex flex-1 p-4 flex-col">
        <header className="">
          <div>
            <strong className="text-5xl font-bold text-primary-white animate-visible">
              Gym<span className="text-primary-purple">Go</span>
            </strong>
          </div>
        </header>
        <div className="mt-8">
          <HoverCard>
            <HoverCardTrigger>
              <span className="text-2xl text-primary-purple font-bold animate-pulse">
                Cadastro do Administrador
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="p-2">
                <span className="text-base">
                  É necessário o preenchimendo da primeira etapa do cadastro!
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <ManagerForm />
      </div>
    </main>
  )
}
