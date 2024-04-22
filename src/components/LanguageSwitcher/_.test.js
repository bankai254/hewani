import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { I18nextProvider } from 'react-i18next'
import i18n from "../../i18n/config";

describe('LanguageSwitcher', () => {
  it('renders correctly with initial language', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    )

    expect(screen.getByText('English')).toBeInTheDocument() // assuming 'English' is a label in your options and default language
  })

  it('changes language when a different option is selected', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    )

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'sw' } }) // Change to Swahili, assuming 'sw' is an option
    expect(i18n.language).toBe('sw')
  })

  it('displays correct labels for language options', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    )

    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('Swahili')).toBeInTheDocument() // assuming you have Swahili as an option
  })
})
