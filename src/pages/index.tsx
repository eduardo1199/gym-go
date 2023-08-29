import { Button } from 'Button'
import { Header } from 'components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full h-screen bg-primary-blue">
      <Header />
      <main className="h-full bg-primary-blue">
        <section className="flex justify-between items-center bg-primary-blue p-2 gap-4">
          <div className="max-w-6xl flex flex-col mx-auto">
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
          <div className="flex justify-between">
            <div className="flex animate-visible">
              <Image
                src="/fit_second.jpg"
                width={600}
                height={500}
                alt="exercises from male"
                className="opacity-80 box rounded-lg"
              />
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </div>
  )
}
