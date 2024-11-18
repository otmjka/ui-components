import { vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SignInForm from './SignInForm'

describe('SignInForm', () => {
  it('submit form. render inputs with email, password, rememberMe data-testid, changing, submit, catch result', async () => {
    const onSubmitMock = vi.fn()
    render(<SignInForm onSubmit={onSubmitMock} />)

    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')
    const submitBtn = screen.getByTestId('submit-btn')

    const rememberMe = screen.getByTestId('rememberMe')
    fireEvent.change(emailInput, { target: { value: 'proba@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Vite4Life' } })
    fireEvent.click(rememberMe)

    await userEvent.click(submitBtn)
    expect(onSubmitMock.mock.calls[0]).toEqual(
      expect.arrayContaining([
        {
          email: 'proba@gmail.com',
          password: 'Vite4Life',
          rememberMe: true,
        },
      ])
    )
  })
})
