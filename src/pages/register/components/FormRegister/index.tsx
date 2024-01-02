import { Button } from 'components/Button'
import { StyledDatePicker } from 'components/DatePicker/styles'
import { Input } from 'components/Input'

export function FormRegister() {
  return (
    <form className="flex flex-col rounded gap-4">
      <Input placeholder="Nome" id="name" />

      <StyledDatePicker label="Dia do nascimento" />

      <Input placeholder="digite seu CPF" id="cpf" />

      <Input placeholder="jonhdoe@gmail.com" id="email" />

      <Input
        placeholder="digite seu telefone ex: (99) 9 9999 99999"
        id="phone"
      />

      <Button.Secondary>Próxima etapa</Button.Secondary>
    </form>
  )
}
