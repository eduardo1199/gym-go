import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Header } from '.'

vi.mock('next/navigation', () => {
  return {
    useRouter() {
      return {
        push() {
          return {}
        },
      }
    },
  }
})

describe('testing component Header', () => {
  it('should render button register', async () => {
    const { getByTitle } = render(<Header />)

    const buttonRegister = getByTitle('register')

    expect(buttonRegister).toBeInTheDocument()
  })

  it('should render button about', async () => {
    const { getByTitle } = render(<Header />)

    const buttonRegister = getByTitle('about')

    expect(buttonRegister).toBeInTheDocument()
  })

  it('should render button login', async () => {
    const { getByTitle } = render(<Header />)

    const buttonRegister = getByTitle('login')

    expect(buttonRegister).toBeInTheDocument()
  })
})
