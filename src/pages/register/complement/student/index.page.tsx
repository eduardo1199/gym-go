import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useState } from 'react'
import { DialogConfirm } from './components/DialogConfirm'
import { PlanButton } from './components/PlanButton'

const mocksPlans = [
  {
    id: '1',
    name: 'Bronze',
    description: 'Descrição plano bronza',
    price: 'R$ 59.00',
  },
  {
    id: '2',
    name: 'Silver',
    description: 'Descrição plano Silver',
    price: 'R$ 59.00',
  },
  {
    id: '3',
    name: 'Gold',
    description: 'Descrição plano Gold',
    price: 'R$ 59.00',
  },
  {
    id: '4',
    name: 'Diamond',
    description: 'Descrição plano Diamond',
    price: 'R$ 59.00',
  },
  {
    id: '5',
    name: 'Emerald',
    description: 'Descrição plano Emerald',
    price: 'R$ 59.00',
  },
]

export default function ComplementRegisterStudent() {
  const [planId, setPlanId] = useState<string | null>(null)

  function handleSetSelectedPlan(planId: string) {
    setPlanId(planId)
  }

  return (
    <div className="w-full h-screen bg-primary-blue">
      <DialogConfirm />

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
                <PlanButton
                  key={plan.id}
                  name={plan.name}
                  price={plan.price}
                  id={plan.id}
                  onSelectedPlan={handleSetSelectedPlan}
                  isSelected={planId === plan.id}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/* export const getServerSideProps = (async (context) => {
  // get session
  const session = await getServerSession(context.req, context.res, authOptions)

  // verify session exists in cookies
  if (session) {
    // TODO: verify profile session and redirect to correct url page

    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }
}) satisfies GetServerSideProps */
