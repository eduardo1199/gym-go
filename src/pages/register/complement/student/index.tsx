import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'components/AlertDialog'
import { Button } from 'components/Button'
import Router from 'next/router'
import { useEffect, useState } from 'react'

export default function ComplementRegisterStudent() {
  const [openDialog, setOpenDialog] = useState(false)

  function handleCloseModal() {
    setOpenDialog(false)
  }

  function handleNavigateToMap() {
    Router.push('/map')
    setOpenDialog(false)
  }

  useEffect(() => {
    setOpenDialog(true)
  }, [])

  return (
    <div className="w-full h-screen bg-primary-blue">
      <AlertDialog open={openDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl">
              Você ainda não tem plano!!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Você já tem acesso a nossa plataforma, porém ainda não realizou o
              cadastro de um plano que tem a sua cara, selecione{' '}
              <span className="font-bold text-base text-primary-blue">
                Continuar
              </span>{' '}
              para cadastrar o restante das informações e escolher seu plano!
            </AlertDialogDescription>
            <AlertDialogDescription className="text-base">
              Porém você pode selecionar em{' '}
              <span className="font-bold text-base text-primary-blue">
                Ir para plataforma
              </span>{' '}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleCloseModal}
              className="bg-primary-purple p-2 rounded font-bold text-primary-white"
            >
              Selecionar um plano
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleNavigateToMap}
              className="bg-primary-blue p-2 rounded font-bold text-primary-white"
            >
              Continuar na plataforma
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
