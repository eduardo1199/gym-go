import { Button } from 'components/Button'
import { Input } from 'components/Input'

export default function ComplementRegisterManager() {
  return (
    <div className="w-full h-screen bg-primary-blue">
      <div className="bg-primary-blue flex h-full">
        <div className="flex flex-1 justify-center items-start flex-col p-6 gap-4">
          <strong className="text-5xl font-bold text-white animate-visible">
            Gym<span className="text-primary-purple">Go</span>
          </strong>

          <span className="text-gray-300 font-bold text-2xl">
            Preencha as informações da sua academia!
          </span>

          <form action="" className="flex flex-col gap-4 w-full">
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>

            <Button.Primary className="mt-4">Cadastrar</Button.Primary>
          </form>
        </div>
        <div className="bg-white w-[50%] flex flex-1 h-full">
          <span className="text-white">Mapa</span>
        </div>
      </div>
    </div>
  )
}
