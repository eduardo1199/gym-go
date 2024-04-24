import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Header } from '.'

describe('testing component Header', () => {
  it('should render button register and about and login', async () => {
    const { getByTitle } = render(<Header />)

    const registerLink = getByTitle('register')
    const aboutLink = getByTitle('about')
    const loginLink = getByTitle('login')

    expect(registerLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(loginLink).toBeInTheDocument()
  })
})
