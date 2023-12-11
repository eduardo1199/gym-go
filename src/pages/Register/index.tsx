import { Button } from 'components/Button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'components/HoverCard'
import { ManagerForm } from './components/ManagerForm'
import Image from 'next/image'

export default function Register() {
  return (
    <main className="w-full h-screen bg-primary-blue p-4">
      <div className="flex bg-white max-w-[1317px] my-[180px] rounded-r-full px-6 relative py-32 mx-auto">
        <div className="flex flex-col px-6 gap-4 max-w-lg">
          <strong className="text-5xl font-bold text-primary-blue animate-visible">
            Gym<span className="text-primary-purple">Go</span>
          </strong>
          <p className="text-primary-blue font-bold text-sm my-4">
            Realize o cadastro da sua academia na plataforma para os clientes
            irem até voce! ou caso esteja procurando uma flexibilidade maior
            para treinar!
          </p>

          <span className="text-primary-purple font-bold text-xl">
            Cadastre-se na plataforma e escolha um plano que mais se parece com
            você!
          </span>

          <div></div>
        </div>
        <div className="absolute top-0 right-16 mt-[-50px]">
          <ManagerForm />
        </div>
      </div>
    </main>
  )
}
