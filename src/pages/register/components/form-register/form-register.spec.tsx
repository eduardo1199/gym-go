import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormRegister } from './index'
import mockRouter from 'next-router-mock'

vi.mock('next/router', () => require('next-router-mock'))

describe('testing component form register', () => {
  it('should render basic inputs and button submit', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <FormRegister />,
    )

    expect(getByPlaceholderText('digite seu nome')).toBeInTheDocument()
    expect(getByPlaceholderText('digite sua senha')).toBeInTheDocument()
    expect(getByPlaceholderText('confirme sua senha')).toBeInTheDocument()
    expect(getByPlaceholderText('digite seu email')).toBeInTheDocument()
    expect(getByTestId('cargo-value')).toBeInTheDocument()
    expect(getByText('Cadastrar')).toBeInTheDocument()
  })

  it('should be submit form when written input and submitting', async () => {
    mockRouter.push('/dashboard')
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <FormRegister />,
    )

    const user = userEvent.setup()

    await user.type(getByPlaceholderText('digite seu nome'), 'Name testing')
    await user.type(getByPlaceholderText('digite sua senha'), '123456')
    await user.type(getByPlaceholderText('confirme sua senha'), '123456')
    await user.type(
      getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    await user.click(getByText('Cadastrar'))

    fireEvent.click(getByTestId('cargo-value'))
    fireEvent.click(getByText('Gerente'))

    await user.click(getByText('Cadastrar'))

    expect('Cadastro relizado com sucesso!').toBeInTheDocument()
    expect(mockRouter.asPath).toEqual('/dashboard')
  })

  it('should be not submit form when no have value name', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <FormRegister />,
    )

    const user = userEvent.setup()

    await user.type(getByPlaceholderText('digite sua senha'), '123456')
    await user.type(getByPlaceholderText('confirme sua senha'), '123456')
    await user.type(
      getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    fireEvent.click(getByTestId('cargo-value'))
    fireEvent.click(getByText('Gerente'))

    await user.click(getByText('Cadastrar'))

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
    expect(mockRouter.asPath).toEqual('/dashboard')
  })

  it('should be not submit form when that passwords not match', async () => {
    mockRouter.push('/dashboard')

    const { getByPlaceholderText, getByText, getByTestId } = render(
      <FormRegister />,
    )

    const user = userEvent.setup()

    await user.type(getByPlaceholderText('digite sua senha'), '123456')
    await user.type(getByPlaceholderText('confirme sua senha'), '123456789')
    await user.type(
      getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    fireEvent.click(getByTestId('cargo-value'))
    fireEvent.click(getByText('Gerente'))

    await user.click(getByText('Cadastrar'))

    expect(getByText('Senhas não são semelhantes')).toBeInTheDocument()
    expect(mockRouter.asPath).toEqual('/dashboard')
  })

  it('should be not submit form when that password is not valid length', async () => {
    mockRouter.push('/dashboard')

    const { getByPlaceholderText, getByText, getByTestId, getAllByText } =
      render(<FormRegister />)

    const user = userEvent.setup()

    await user.type(getByPlaceholderText('digite sua senha'), '123')
    await user.type(getByPlaceholderText('confirme sua senha'), '123')
    await user.type(
      getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    fireEvent.click(getByTestId('cargo-value'))
    fireEvent.click(getByText('Gerente'))

    await user.click(getByText('Cadastrar'))

    expect(
      getAllByText('A senha precisa ter no mínimo 6 caracteres ou números'),
    ).toHaveLength(2)
    expect(mockRouter.asPath).toEqual('/dashboard')
  })
})