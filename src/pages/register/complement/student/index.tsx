import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from 'components/AlertDialog'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import Router from 'next/router'
import { useEffect, useState } from 'react'

const mocksPlans = [
  {
    id: 1,
    name: 'Bronze',
    description: 'Descrição plano bronza',
  },
  {
    id: 2,
    name: 'Silver',
    description: 'Descrição plano Silver',
  },
  {
    id: 3,
    name: 'Gold',
    description: 'Descrição plano Gold',
  },
  {
    id: 4,
    name: 'Diamond',
    description: 'Descrição plano Diamond',
  },
  {
    id: 5,
    name: 'Emerald',
    description: 'Descrição plano Emerald',
  },
]

export default function ComplementRegisterStudent() {
  const [openDialog, setOpenDialog] = useState(false)
  const [idPlan, setIdPlan] = useState<number | null>(null)

  function handleCloseModal() {
    setOpenDialog(false)
  }

  function handleNavigateToMap() {
    Router.push('/map')
    setOpenDialog(false)
  }

  function handleSetSelectedPlan(planId: number) {
    setIdPlan(planId)
  }

  useEffect(() => {
    /* setOpenDialog(true) */
  }, [])

  return (
    <div className="w-full h-screen bg-primary-blue">
      <AlertDialog open={openDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl">
              Você ainda não tem plano!!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Você já tem acesso a nossa plataforma, porém ainda não realizou o
              cadastro de um plano que tem a sua cara, selecione{' '}
              <span className="font-bold text-base text-primary-blue">
                Selecionar um plano
              </span>{' '}
              para cadastrar o restante das informações e escolher seu plano!
            </AlertDialogDescription>
            <AlertDialogDescription className="text-base">
              Porém você pode selecionar em{' '}
              <span className="font-bold text-base text-primary-blue">
                Ir para plataforma
              </span>{' '}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleCloseModal}
              className="bg-primary-purple p-2 rounded font-bold text-primary-white"
            >
              Selecionar um plano
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleNavigateToMap}
              className="bg-primary-blue p-2 rounded font-bold text-primary-white"
            >
              Continuar na plataforma
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="h-full flex max-w-7xl mx-auto gap-8 p-4">
        <div className="flex flex-1 flex-col p-10 justify-center gap-12 border-r border-gray-500">
          <strong className="text-5xl font-bold text-white animate-visible">
            Gym<span className="text-primary-purple">Go</span>
          </strong>

          <span className="text-gray-300 font-bold text-2xl">
            Preencha suas informações
          </span>

          <form action="" className="flex flex-col gap-4">
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
          </form>

          <Button.Primary className="mt-4">Comprar e continuar</Button.Primary>
        </div>

        <div className="w-1/3 flex flex-col justify-center p-4 gap-10">
          <span className="text-gray-300 font-bold text-2xl">
            Selecione seu plano
          </span>

          <div className="flex flex-col gap-4">
            {mocksPlans.map((plan) => {
              return (
                <button
                  key={plan.id}
                  className="border bg-transparent border-primary-gray p-6 flex justify-between items-center hover:bg-primary-purple animate-visible hover:-translate-y-1 hover:scale-105 ease-in duration-300 group"
                >
                  <span className="text-white font-extrabold text-lg">
                    {plan.name}
                  </span>

                  <p className="text-primary-purple font-extrabold text-lg group-hover:text-primary-blue">
                    R$ 59.00
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
