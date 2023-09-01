import { Button } from 'components/Button'
import { Header } from 'components/Header'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'

export default function Home() {
  return (
    <div className="w-full h-screen bg-primary-blue">
      <Header />
      <main className="h-full bg-primary-blue">
        <section className="flex justify-between items-center bg-primary-blue p-2 gap-4">
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
              <Button.Primary>Cadastra-se</Button.Primary>
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
            <div className="flex flex-1 animate-visible">
              <Image
                src="/fit_second.jpg"
                width={600}
                height={500}
                alt="exercises from male"
                className="opacity-80 box rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between animate-visible">
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-lg hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="about">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full">
                    Somos uma plataforma administrativa de acesso para sua
                    academia mais próximo.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-primary-white font-bold">
                      Aqui vou escrever algo
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-lg hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="manager">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full flex">
                    Podemos administrar também sua academia.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-primary-white font-bold">
                      Aqui vou escrever algo
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-lg hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="map">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full flex">
                    Visualize sua academia mais próxima enquanto aluno.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-primary-white font-bold">
                      Aqui vou escrever algo
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-lg hover:shadow-tertiary-purple hover:-translate-y-1 hover:scale-105"
              >
                <Accordion.Item value="student">
                  <Accordion.Trigger className="text-primary-white font-bold text-lg p-2 hover:brightness-105 w-full flex">
                    Uma aproximidade maior entre alunos e instrutores.
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <span className="text-sm text-primary-white font-bold">
                      Aqui vou escrever algo
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
