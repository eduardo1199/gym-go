import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TimeField } from '@mui/x-date-pickers'

import * as Accordion from '@radix-ui/react-accordion'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { getWeekDays } from 'utils/get-week-days'
import { z } from 'zod'
import { TextFieldStyled } from '../text-field-styled'
import dayjs, { Dayjs } from 'dayjs'

const complementRegisterManagerGymSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  cnpj: z.string(),
  gymName: z.string(),
  availableOpenGym: z.array(
    z.object({
      startTimeAvailable: z.date(),
      endTimeAvailable: z.date(),
      blockedStartTime: z.date().nullable(),
      blockedEndTime: z.date().nullable(),
      dayAvailable: z.number().min(0).max(6),
    }),
  ),
})

type ComplementRegisterManagerGymData = z.infer<
  typeof complementRegisterManagerGymSchema
>

export function FormRegisterGym() {
  const { handleSubmit, register, control, watch } =
    useFormContext<ComplementRegisterManagerGymData>()

  const { fields } = useFieldArray({
    control,
    name: 'availableOpenGym',
  })

  async function handleSubmitRegisterComplementManager(
    data: ComplementRegisterManagerGymData,
  ) {
    console.log(data)
  }

  const { daysOfWeek } = getWeekDays()

  const available = watch('availableOpenGym')

  return (
    <form
      action=""
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(handleSubmitRegisterComplementManager)}
    >
      <Input.Root
        placeholder="Nome da academia"
        className="bg-transparent text-white"
        {...register('gymName')}
      >
        <Input.Error />
      </Input.Root>
      <Input.Root
        placeholder="CNPJ"
        className="bg-transparent text-white"
        {...register('cnpj')}
      >
        <Input.Error />
      </Input.Root>

      <span className="text-muted-foreground text-white text-sm font-semibold">
        Selecione os horários disponíveis da academia
      </span>

      <div className="space-y-3">
        {fields.map((field, index) => {
          return (
            <Accordion.Root
              key={field.id}
              type="single"
              collapsible
              className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple"
            >
              <Accordion.Item value="monday">
                <Accordion.Trigger className="text-primary-purple font-semibold text-sm p-2 hover:brightness-105 w-full flex">
                  {daysOfWeek[field.dayAvailable].label}
                </Accordion.Trigger>

                <Accordion.Content className="p-2 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <Controller
                      name={`availableOpenGym.${index}.startTimeAvailable`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <TimeField
                            label="Hora de abertura"
                            variant="outlined"
                            format="HH:mm"
                            slots={{ textField: TextFieldStyled }}
                            slotProps={{
                              textField: {
                                focused: true,
                              },
                            }}
                            onChange={(event: Dayjs) => field.onChange(event)}
                            value={dayjs(field.value ?? null)}
                          />
                        )
                      }}
                    />
                    <Controller
                      name={`availableOpenGym.${index}.endTimeAvailable`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <TimeField
                            label="Hora de fechamento"
                            variant="outlined"
                            format="HH:mm"
                            slots={{ textField: TextFieldStyled }}
                            slotProps={{
                              textField: {
                                focused: true,
                              },
                            }}
                            onChange={(event: Dayjs) => field.onChange(event)}
                            value={dayjs(field.value ?? null)}
                          />
                        )
                      }}
                    />
                  </div>

                  <span className="text-muted-foreground text-white font-semibold text-xs">
                    Caso existe horário de intervalo, selecione abaixo:
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    <Controller
                      name={`availableOpenGym.${index}.blockedStartTime`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <TimeField
                            label="Hora do inicio do intervalo"
                            variant="outlined"
                            format="HH:mm"
                            slots={{ textField: TextFieldStyled }}
                            slotProps={{
                              textField: {
                                focused: true,
                              },
                            }}
                            onChange={(event: Dayjs) => field.onChange(event)}
                            value={dayjs(field.value ?? null)}
                          />
                        )
                      }}
                    />

                    <Controller
                      name={`availableOpenGym.${index}.blockedEndTime`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <TimeField
                            label="Hora do fim do intervalo"
                            variant="outlined"
                            format="HH:mm"
                            slots={{ textField: TextFieldStyled }}
                            slotProps={{
                              textField: {
                                focused: true,
                              },
                            }}
                            onChange={(event: Dayjs) => field.onChange(event)}
                            value={dayjs(field.value ?? null)}
                          />
                        )
                      }}
                    />
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
