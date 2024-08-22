import React from 'react'
import Container from '../../container/Container'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Terms = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <div className='flex justify-between items-center py-4 my-8'>
                <p className='text-xs text-[#41413F]'>{t('termsCopyright')}</p>
                <div className='flex gap-2 text-xs text-[#707070]'>
                    <NavLink to='/'>{t('termsAccessibility')}, </NavLink>
                    <NavLink to='/'>{t('termsUserAgreement')}, </NavLink>
                    <NavLink to='/'>{t('termsPrivacy')}, </NavLink>
                    <NavLink to='/'>{t('termsPaymentsTerms')}, </NavLink>
                    <NavLink to='/'>{t('termsCookies')}, </NavLink>
                    <NavLink to='/'>{t('termsPrivacyChoices')}, </NavLink>
                    <NavLink to='/'>{t('termsAnd')} </NavLink>
                    <NavLink to='/'>{t('termsAdChoice')}</NavLink>
                </div>
            </div>
        </Container>
    )
}

export default Terms
