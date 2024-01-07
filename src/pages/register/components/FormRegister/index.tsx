import { Button } from 'components/Button'
import { StyledDatePicker } from 'components/DatePicker/styles'
import { Input } from 'components/Input'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dayjs } from 'dayjs'
import { baseApi } from 'lib/baseApi'

interface RegisterClientFormData {
  username: string
  /*  date: Date */
  /*  cpf: string */
  email: string
  /* phone: string */
  password: string
  office: string
}

const RegisterClientFormDataSchema = z.object({
  username: z.string({
    required_error: 'Campo obrigatório',
  }),
  /* date: z.date({
    required_error: 'Campo obrigatório',
  }), */
  /*  cpf: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'cpf inválido'), */
  /*   phone: z.string({
    required_error: 'Campo obrigatório',
  }), */
  password: z.string({
    required_error: 'Campo obrigatório',
  }),
  email: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .email('Email inválido'),
  office: z.enum(['A', 'G']).optional(),
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
    const { email, office, password, username } = data

    const response = await baseApi.post('/register', {
      username,
      email,
      office: office ?? 'A',
      password,
    })

    console.log(response.data)
  }

  return (
    <form
      className="flex flex-col rounded gap-4"
      onSubmit={handleSubmit(handleSubmitRegisterClient)}
    >
      <Input placeholder="Nome" id="name" {...register('username')} />

      {/*  <Controller
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
      */}

      <Input
        placeholder="digite sua senha"
        id="cpf"
        {...register('password')}
      />

      <Input
        placeholder="jonhdoe@gmail.com"
        id="email"
        {...register('email')}
      />

      <Input
        placeholder="digite seu cargo"
        id="phone"
        {...register('office')}
      />

      <Button.Secondary type="submit" disabled={isSubmitting}>
        Próxima etapa
      </Button.Secondary>
    </form>
  )
}
