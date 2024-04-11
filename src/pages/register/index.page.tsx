import { FormRegister } from './components/form-register'

export default function Register() {
  return (
    <main className="w-full h-screen bg-primary-blue p-4">
      <div className="flex bg-white max-w-[1317px] my-[180px] rounded-r-full px-6 relative py-32 mx-auto">
        <div className="flex flex-col px-6 gap-4 max-w-lg">
          <strong className="text-5xl font-bold text-primary-blue animate-visible">
            Gym<span className="text-primary-purple">Go</span>
          </strong>

          <span className="text-primary-purple font-bold text-xl">
            É simples o cadastro e você pode desativar a hora que quiser!
          </span>

          <p className="text-primary-blue font-bold text-sm my-4">
            Realize o cadastro de suas informações escolhendo seu perfil que
            mais se adequa a você!
          </p>
        </div>
        <div className="absolute top-0 right-16 mt-[-50px] w-[50%]">
          <FormRegister />
        </div>
      </div>
    </main>
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
