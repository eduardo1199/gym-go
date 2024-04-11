import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Checkbox } from '@/components/ui/checkbox'

import * as Accordion from '@radix-ui/react-accordion'
import { useFormContext } from 'react-hook-form'
import { getHoursOfDay } from 'utils/get-hour-days'
import { getWeekDays } from 'utils/get-week-days'
import { z } from 'zod'

const complementRegisterManagerGymSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
})

type ComplementRegisterManagerGymData = z.infer<
  typeof complementRegisterManagerGymSchema
>

export function FormRegisterGym() {
  const { handleSubmit } = useFormContext<ComplementRegisterManagerGymData>()

  async function handleSubmitRegisterComplementManager(
    data: ComplementRegisterManagerGymData,
  ) {
    console.log(data)
  }

  const { daysOfWeek } = getWeekDays()
  const { hoursFromDay } = getHoursOfDay()

  console.log(hoursFromDay)

  return (
    <form
      action=""
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(handleSubmitRegisterComplementManager)}
    >
      <Input.Root
        placeholder="Nome da academia"
        className="bg-transparent text-white"
      >
        <Input.Error />
      </Input.Root>
      <Input.Root placeholder="CNPJ" className="bg-transparent text-white">
        <Input.Error />
      </Input.Root>

      <span className="text-muted-foreground text-white text-sm font-semibold">
        Selecione os horários disponíveis da academia
      </span>

      <div className="space-y-3">
        {daysOfWeek.map((dayOfWeek) => {
          return (
            <Accordion.Root
              key={dayOfWeek.day.getDate()}
              type="single"
              collapsible
              className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple"
            >
              <Accordion.Item value="monday">
                <Accordion.Trigger className="text-primary-purple font-semibold text-sm p-2 hover:brightness-105 w-full flex">
                  {dayOfWeek.label}
                </Accordion.Trigger>

                <Accordion.Content className="p-2">
                  <div className="grid gap-3 grid-cols-3">
                    {hoursFromDay.map((hour) => {
                      return (
                        <div key={hour} className="flex items-center gap-2">
                          <Checkbox id={hour} />
                          <label
                            htmlFor={hour}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                          >
                            {hour}
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          )
        })}
      </div>

      <Button.Primary className="mt-4" type="submit">
        Cadastrar
      </Button.Primary>
    </form>
  )
}
