import { zodResolver } from '@hookform/resolvers/zod'
import { GoogleLogo } from '@phosphor-icons/react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth].api'

const LoginSchema = z.object({
  email: z.string().email('Email inválido, digite um email válido!'),
  password: z
    .string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres ou números'),
})

type LoginDataSchema = z.infer<typeof LoginSchema>

export default function Login() {
  const {
    register,
    formState: { isSubmitting, errors },
    control,
    setError,
    watch,
    handleSubmit,
  } = useForm<LoginDataSchema>({
    resolver: zodResolver(LoginSchema),
  })

  async function handleRegisterGoogleProvider() {
    await signIn('google')
  }

  async function handleSubmitLogin(data: LoginDataSchema) {
    // TODO: execute login

    console.log(data)
  }

  return (
    <div className="w-full h-screen bg-primary-blue">
      <div className="flex justify-center items-center h-full flex-col max-w-md mx-auto gap-4">
        <strong className="text-5xl font-bold text-white animate-visible">
          Gym<span className="text-primary-purple">Go</span>
        </strong>

        <div className="w-full flex flex-col mt-9">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSubmitLogin)}
          >
            <Input.Root
              {...register('email')}
              placeholder="Email"
              className="bg-transparent text-white"
              type="email"
              error={!!errors.email?.message}
            >
              <Input.Error message={errors.email?.message} />
            </Input.Root>
            <Input.Root
              {...register('password')}
              placeholder="Senha"
              className="bg-transparent text-white"
              type="password"
              error={!!errors.password?.message}
            >
              <Input.Error message={errors.password?.message} />
            </Input.Root>

            {isSubmitting ? (
              <Button.Loading className="mt-8" />
            ) : (
              <Button.Primary type="submit" className="mt-8">
                Entrar
              </Button.Primary>
            )}
          </form>

          <button
            className="bg-red-500 p-3 rounded-lg flex items-center justify-center gap-2 mb-6 animate-visible hover:brightness-90 transition-all mt-12"
            type="button"
            onClick={handleRegisterGoogleProvider}
          >
            <GoogleLogo
              size={25}
              weight="bold"
              className="text-primary-white"
            />
            <span className="font-bold text-base text-primary-white">
              Entrar com google
            </span>
          </button>
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
