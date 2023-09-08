import { Barbell, User, WarningCircle } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'components/HoverCard'
import { Input } from 'components/Input'
import { Tab } from 'components/Tabs'

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
        <div className="px-10 my-auto">
          <Tab.Root defaultValue="user-infos">
            <Tab.TabsList>
              <Tab.TabsTrigger value="user-infos">
                <User size={24} />
                Informe seus dados abaixo
              </Tab.TabsTrigger>
              <Tab.TabsTrigger value="gym-info">
                <Barbell size={24} />
                Informe os dados da academia
              </Tab.TabsTrigger>
            </Tab.TabsList>

            <Tab.TabsContent value="user-infos">
              {/* Component to manager */}
              <form className="flex flex-col rounded shadow-lg gap-2">
                <Input placeholder="Nome" label="Insira seu nome" id="name" />
                <Input
                  placeholder="dia/Mês/ano"
                  label="Data de nascimento"
                  id="birthDate"
                />
              </form>
            </Tab.TabsContent>
          </Tab.Root>
        </div>
      </div>
    </main>
  )
}
