import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { baseApi } from 'lib/baseApi'
import { Offices } from 'types/offices'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select'
import Router from 'next/router'
import { signIn } from 'next-auth/react'

interface RegisterClientFormData {
  username: string
  email: string
  password: string
  confirm_password: string
  cargo: Offices
}

const RegisterClientFormDataSchema = z
  .object({
    username: z.string({
      required_error: 'Campo obrigatório',
    }),
    password: z
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres ou números'),
    confirm_password: z
      .string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres ou números'),
    email: z.string().email('Email inválido, digite um email válido!'),
    cargo: z.enum([Offices.student, Offices.manager, Offices.employee], {
      invalid_type_error: 'Selecione um perfil!',
      required_error: 'Selecione um perfil!',
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Senhas não são semelhantes',
    path: ['confirm_password'],
  })

export function FormRegister() {
  const {
    register,
    formState: { isSubmitting, errors },
    control,
    setError,
    handleSubmit,
  } = useForm<RegisterClientFormData>({
    resolver: zodResolver(RegisterClientFormDataSchema),
  })

  async function handleRegisterGoogleProvider() {
    await signIn('google', {
      callbackUrl: '/register-provider',
    })
  }

  async function handleSubmitRegisterClient(data: RegisterClientFormData) {
    const { email, cargo, password, username } = data

    if (!username.trim()) {
      setError('username', {
        message: 'Campo obrigatório',
      })

      return
    }

    try {
      const response = await baseApi.post('/register', {
        username,
        email,
        cargo,
        password,
      })

      console.log(response.data)

      if (cargo === Offices.student) {
        Router.push('/register/complement/student')
      }

      if (cargo === Offices.manager) {
        Router.push('/register/complement/manager')
      }
    } catch (error) {
      console.error(error)

      if (cargo === Offices.student) {
        Router.push('/register/complement/student')
      }

      if (cargo === Offices.manager) {
        Router.push('/register/complement/manager')
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-primary-gray shadow-xl p-3 flex flex-col gap-4">
      <strong className="text-2xl font-bold text-primary-blue animate-visible">
        Gym<span className="text-primary-purple">Go</span>
      </strong>

      <span className="font-bold text-sm text-primary-blue animate-pulse">
        Preenche suas informações!
      </span>

      <form
        className="flex flex-col rounded gap-4"
        onSubmit={handleSubmit(handleSubmitRegisterClient)}
      >
        <Input.Root
          placeholder="Nome"
          {...register('username')}
          error={!!errors.username?.message}
        >
          <Input.Error message={errors.username?.message} />
        </Input.Root>

        <Input.Root
          placeholder="digite sua senha"
          {...register('password')}
          type="password"
          error={!!errors.password?.message}
        >
          <Input.Error message={errors.password?.message} />
        </Input.Root>

        <Input.Root
          placeholder="repita sua senha"
          {...register('confirm_password')}
          type="password"
          error={!!errors.confirm_password?.message}
        >
          <Input.Error message={errors.confirm_password?.message} />
        </Input.Root>

        <Input.Root
          placeholder="jonhdoe@gmail.com"
          {...register('email')}
          error={!!errors.email?.message}
        >
          <Input.Error message={errors.email?.message} />
        </Input.Root>

        <Controller
          name="cargo"
          control={control}
          render={({ field }) => {
            return (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger error={!!errors.cargo?.message}>
                  <SelectValue placeholder="Selecione seu perfil" />
                </SelectTrigger>
                <Input.Error message={errors.cargo?.message} />
                <SelectContent>
                  <SelectItem value="A">Aluno</SelectItem>
                  <SelectItem value="G">Gerente</SelectItem>
                  <SelectItem value="F">Funcionário</SelectItem>
                </SelectContent>
              </Select>
            )
          }}
        />

        {isSubmitting ? (
          <Button.Loading />
        ) : (
          <Button.Secondary type="submit">Cadastrar</Button.Secondary>
        )}
      </form>
    </div>
  )
}
