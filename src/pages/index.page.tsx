import { Header } from '@/components/Header'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'
import { NavigateLink } from '@/components/NavigateLink'

export default function Home() {
  return (
    <div className="w-full h-screen bg-primary-blue">
      <Header />
      <main className="h-full bg-primary-blue">
        <section className="flex justify-between items-center bg-primary-blue gap-4">
          <div className="max-w-6xl flex flex-col mx-auto p-4">
            <div className="mb-10">
              <strong className="text-8xl font-bold text-primary-white animate-visible">
                Gym<span className="text-primary-purple">Go</span>
              </strong>
              <p className="text-5xl font-bold text-primary-purple animate-visible">
                Aqui seu foco é outro!
              </p>
            </div>
            <div>
              <p className="text-base text-primary-white font-bold animate-visible">
                Academia sempre mais próxima de você!
              </p>
              <p className="text-base text-primary-white font-bold animate-visible">
                Para administrador, tenha foco no seu gerenciamento!
              </p>
            </div>
            <div className="mt-5 animate-visible">
              <NavigateLink href="/register" text="Cadastra-se" />
            </div>
          </div>
          <div className="flex animate-visible">
            <Image
              src="/fit.jpg"
              width={600}
              height={500}
              alt="exercises from wolman"
              className="opacity-50 box rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center px-2 py-12 gap-12 bg-primary-blue pt-10">
          <strong className="text-4xl font-bold text-primary-white animate-visible">
            Quem somos?
          </strong>
          <div className="flex gap-10 p-4">
            <div className="flex animate-visible">
              <Image
                src="/fit_second.jpg"
                width={500}
                height={500}
                alt="exercises from male"
                className="opacity-80 box rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-between animate-visible flex-1">
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="about">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full">
                    Somos uma plataforma administrativa de acesso para sua
                    academia mais próximo.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-second-purple font-bold">
                      Enquanto assinante de algum plano, você aluno terá
                      benefícios daquele determinado plano selecionado, sendo
                      realizado uma cobrança mensal do plano escolhido. Cada
                      plano possui
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="manager">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full flex">
                    Podemos administrar também sua academia.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-second-purple font-bold">
                      Caso seja administrador da sua academia, você poderá
                      validar as entradas de cada aluno pela nossa plataforma,
                      cadastrar alunos fixos no sistema, gerenciar planos e
                      muito mais!
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="map">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full flex">
                    Visualize sua academia mais próxima enquanto aluno.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-second-purple font-bold">
                      Dependendo da escolha do seu plano, você terá acesso há
                      academia mais próxima de você!
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="student">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full flex">
                    Uma aproximidade maior entre alunos e instrutores.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-second-purple font-bold">
                      Dependendo da escolha do seu plano, você terá a um
                      acompnhamento bem de pertinho entre você e os instrutores!
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center px-2 py-12 gap-12 bg-primary-blue pt-10">
          <strong className="text-4xl font-bold text-primary-white animate-visible"></strong>
          <div className="flex gap-10 p-4"></div>
        </section>
      </main>
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
