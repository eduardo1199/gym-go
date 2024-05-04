import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormRegister } from './index'
import mockRouter from 'next-router-mock'

vi.mock('next/router', () => require('next-router-mock'))

describe('testing component form register', () => {
  it('should render basic inputs and button submit', async () => {
    render(<FormRegister />)

    expect(screen.getByPlaceholderText('digite seu nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('digite sua senha')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('confirme sua senha'),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('digite seu email')).toBeInTheDocument()
    expect(screen.getByTestId('cargo-value')).toBeInTheDocument()
    expect(screen.getByText('Cadastrar')).toBeInTheDocument()
  })

  it('should be submit form when written input and submitting', async () => {
    mockRouter.push('/dashboard')
    render(<FormRegister />)

    const user = userEvent.setup()

    await user.type(
      screen.getByPlaceholderText('digite seu nome'),
      'Name testing',
    )
    await user.type(screen.getByPlaceholderText('digite sua senha'), '123456')
    await user.type(screen.getByPlaceholderText('confirme sua senha'), '123456')
    await user.type(
      screen.getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    await user.click(screen.getByText('Cadastrar'))

    fireEvent.click(screen.getByTestId('cargo-value'))
    fireEvent.click(screen.getByText('Gerente'))

    await user.click(screen.getByText('Cadastrar'))

    expect('Cadastro relizado com sucesso!').toBeInTheDocument()
    expect(mockRouter.asPath).toEqual('/dashboard')
  })

  it('should be not submit form when no have value name', async () => {
    render(<FormRegister />)

    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText('digite sua senha'), '123456')
    await user.type(screen.getByPlaceholderText('confirme sua senha'), '123456')
    await user.type(
      screen.getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    fireEvent.click(screen.getByTestId('cargo-value'))
    fireEvent.click(screen.getByText('Gerente'))

    await user.click(screen.getByText('Cadastrar'))

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
    expect(mockRouter.asPath).toEqual('/dashboard')
  })

  it('should be not submit form when that passwords not match', async () => {
    mockRouter.push('/dashboard')

    render(<FormRegister />)

    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText('digite sua senha'), '123456')
    await user.type(
      screen.getByPlaceholderText('confirme sua senha'),
      '123456789',
    )
    await user.type(
      screen.getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    fireEvent.click(screen.getByTestId('cargo-value'))
    fireEvent.click(screen.getByText('Gerente'))

    await user.click(screen.getByText('Cadastrar'))

    expect(screen.getByText('Senhas não são semelhantes')).toBeInTheDocument()
    expect(mockRouter.asPath).toEqual('/dashboard')
  })

  it('should be not submit form when that password is not valid length', async () => {
    mockRouter.push('/dashboard')

    render(<FormRegister />)

    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText('digite sua senha'), '123')
    await user.type(screen.getByPlaceholderText('confirme sua senha'), '123')
    await user.type(
      screen.getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    fireEvent.click(screen.getByTestId('cargo-value'))
    fireEvent.click(screen.getByText('Gerente'))

    await user.click(screen.getByText('Cadastrar'))

    expect(
      screen.getAllByText(
        'A senha precisa ter no mínimo 6 caracteres ou números',
      ),
    ).toHaveLength(2)
    expect(mockRouter.asPath).toEqual('/dashboard')
  })
})
