import React from 'react'
import { useTranslation } from 'react-i18next'
import { languageOptions } from 'src/utils/common'
import './LanguageSwitcher.scss'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className={`language-container`}>
      <small>{t('languageSwitcher')}</small>
      <select
        className="language-dropdown-list"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languageOptions.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
