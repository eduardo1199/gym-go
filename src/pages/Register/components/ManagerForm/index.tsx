import { Barbell, User } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { DatePickerDemo } from 'components/DatePicker'

import { Input } from 'components/Input'
import { Tab } from 'components/Tabs'

export function ManagerForm() {
  return (
    <div className="bg-white rounded-lg shadow-primary-gray shadow-xl max-w-2xl p-3">
      <Tab.Root defaultValue="user-infos">
        <Tab.TabsList>
          <Tab.TabsTrigger value="user-infos">
            <User size={24} />
            <span>Informe seus dados pessoais</span>
          </Tab.TabsTrigger>
          <Tab.TabsTrigger value="gym-info">
            <Barbell size={24} />
            <span>Informe os dados da academia</span>
          </Tab.TabsTrigger>
        </Tab.TabsList>

        <Tab.TabsContent value="user-infos">
          {/* Component form to manager */}
          <form className="flex flex-col rounded gap-4">
            <Input placeholder="Nome" id="name" />
            <DatePickerDemo />
            <Input placeholder="digite seu CPF" id="cpf" />
            <Input placeholder="jonhdoe@gmail.com" id="email" />
            <Input
              placeholder="digite seu telefone ex: (99) 9 9999 99999"
              id="phone"
            />

            <Button.Secondary>Próxima etapa</Button.Secondary>
          </form>
        </Tab.TabsContent>
      </Tab.Root>
    </div>
  )
}
