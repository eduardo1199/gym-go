import { Barbell, User } from '@phosphor-icons/react'
import { Tab } from 'components/Tabs'
import { FormRegister } from 'pages/register/components/FormRegister'

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
          <FormRegister />
        </Tab.TabsContent>
      </Tab.Root>
    </div>
  )
}
