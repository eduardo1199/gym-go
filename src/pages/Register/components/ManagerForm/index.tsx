import { Barbell, User } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { DatePickerDemo } from 'components/DatePicker'

import { Input } from 'components/Input'
import { Tab } from 'components/Tabs'

export function ManagerForm() {
  return (
    <div className="px-10 py-3 my-auto bg-white rounded shadow-tertiary-purple shadow-xl max-w-2xl mx-auto">
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
          {/* Component form to manager */}
          <form className="flex flex-col rounded gap-2">
            <Input placeholder="Nome" label="Insira seu nome" id="name" />
            <DatePickerDemo />
            <Input placeholder="999.999.999-99" label="CPF" id="cpf" />
            <Input placeholder="jonhdoe@gmail.com" label="Email" id="email" />
            <Input
              placeholder="(55) 55 5555 5555"
              label="Telefone"
              id="phone"
            />

            <Button.Secondary>Próxima etapa</Button.Secondary>
          </form>
        </Tab.TabsContent>
      </Tab.Root>
    </div>
  )
}
