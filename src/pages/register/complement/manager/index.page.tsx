import { z } from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MapRegister } from 'pages/register/components/map-register'
import { FormRegisterGym } from 'pages/register/components/form-register-gym'

const complementRegisterManagerGymSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
})

type ComplementRegisterManagerGymData = z.infer<
  typeof complementRegisterManagerGymSchema
>

export default function ComplementRegisterManager() {
  const methods = useForm<ComplementRegisterManagerGymData>({
    resolver: zodResolver(complementRegisterManagerGymSchema),
  })

  return (
    <FormProvider {...methods}>
      <div className="w-full h-screen bg-primary-blue relative">
        <aside className="bg-primary-blue w-[350px] h-full flex absolute z-50 shadow-lg shadow-primary-blue flex-col items-center p-6 gap-6 overflow-auto scroll-mx-3">
          <strong className="text-5xl font-bold text-white animate-visible">
            Gym<span className="text-primary-purple">Go</span>
          </strong>

          <span className="text-gray-300 font-bold text-2xl">
            Preencha as informações da sua academia!
          </span>

          <FormRegisterGym />
        </aside>
        <div className="bg-white w-[100%] h-full">
          <MapRegister />
        </div>
      </div>
    </FormProvider>
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
