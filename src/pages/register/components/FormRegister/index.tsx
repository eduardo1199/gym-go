import { Button } from 'components/Button'
import { StyledDatePicker } from 'components/DatePicker/styles'
import { Input } from 'components/Input'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dayjs } from 'dayjs'

interface RegisterClientFormData {
  name: string
  date: Date
  cpf: string
  email: string
  phone: string
}

const RegisterClientFormDataSchema = z.object({
  name: z.string({
    required_error: 'Campo obrigatório',
  }),
  date: z.date({
    required_error: 'Campo obrigatório',
  }),
  cpf: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'cpf inválido'),
  phone: z.string({
    required_error: 'Campo obrigatório',
  }),
  email: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .email('Email inválido'),
})

export function FormRegister() {
  const {
    register,
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<RegisterClientFormData>({
    resolver: zodResolver(RegisterClientFormDataSchema),
  })

  async function handleSubmitRegisterClient(data: RegisterClientFormData) {
    console.log(data)
  }

  return (
    <form
      className="flex flex-col rounded gap-4"
      onSubmit={handleSubmit(handleSubmitRegisterClient)}
    >
      <Input placeholder="Nome" id="name" {...register('name')} />

      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <StyledDatePicker
            label="Dia do nascimento"
            value={field.value}
            onChange={(date: Dayjs) => field.onChange(date.toDate())}
          />
        )}
      />

      <Input placeholder="digite seu CPF" id="cpf" {...register('cpf')} />

      <Input
        placeholder="jonhdoe@gmail.com"
        id="email"
        {...register('email')}
      />

      <Input
        placeholder="digite seu telefone ex: (99) 9 9999 99999"
        id="phone"
        {...register('phone')}
      />

      <Button.Secondary type="submit" disabled={isSubmitting}>
        Próxima etapa
      </Button.Secondary>
    </form>
  )
}
