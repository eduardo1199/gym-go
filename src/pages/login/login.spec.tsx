import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './index.page'

vi.mock('next/router', () => require('next-router-mock'))

describe('Testing Login page', () => {
  it('should be login submit', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />)

    expect(getByPlaceholderText('digite seu email')).toBeInTheDocument()
    expect(getByPlaceholderText('digite sua senha')).toBeInTheDocument()

    const user = userEvent.setup()

    await user.type(
      getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )
    await user.type(getByPlaceholderText('digite sua senha'), '123456789')

    expect(getByText('Entrar')).toBeInTheDocument()
    await user.click(getByText('Entrar'))
  })

  it('should be not login submit when not fill email', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />)

    const user = userEvent.setup()

    await user.type(getByPlaceholderText('digite sua senha'), '123456789')

    expect(getByText('Entrar')).toBeInTheDocument()
    await user.click(getByText('Entrar'))

    expect(
      getByText('Email inválido, digite um email válido!'),
    ).toBeInTheDocument()
  })

  it('should be not login submit when not password', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />)

    const user = userEvent.setup()

    await user.type(
      getByPlaceholderText('digite seu email'),
      'eduardo@gmail.com',
    )

    expect(getByText('Entrar')).toBeInTheDocument()
    await user.click(getByText('Entrar'))

    expect(
      getByText('A senha precisa ter no mínimo 6 caracteres ou números'),
    ).toBeInTheDocument()
  })
})
