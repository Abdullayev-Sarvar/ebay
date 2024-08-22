import Container from '../../container/Container'
import React from 'react'
import Facebook from '../../assets/svg/facebook.svg'
import Twitter from '../../assets/svg/twitter.svg'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className='border-t border-[#CCCCCC]'>
            <Container>
                <div className='flex justify-between items-start py-6 text-xs text-[#767676]'>
                    <ul className='flex flex-col gap-3'>
                        <b className='text-base italic pb-5'>{t('footerBuy')}</b>
                        <NavLink to='/'>{t('footerRegistration')}</NavLink>
                        <NavLink to='/'>{t('footerMoneyBack')}</NavLink>
                        <NavLink to='/'>{t('footerBiddingHelp')}</NavLink>
                        <NavLink to='/'>{t('footerStores')}</NavLink>
                        <NavLink to='/'>{t('footerCharity')}</NavLink>
                        <NavLink to='/'>{t('footerCharityShop')}</NavLink>
                        <NavLink to='/'>{t('footerSalesEvents')}</NavLink>
                    </ul>
                    <div className='flex flex-col gap-7'>
                        <ul className='flex flex-col gap-3'>
                            <b className='text-base italic pb-5'>{t('footerSell')}</b>
                            <NavLink to='/'>{t('footerStartSelling')}</NavLink>
                            <NavLink to='/'>{t('footerHowToSell')}</NavLink>
                            <NavLink to='/'>{t('footerBusinessSellers')}</NavLink>
                            <NavLink to='/'>{t('footerAffiliates')}</NavLink>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            <b className='text-base italic pb-5'>{t('footerToolsApps')}</b>
                            <NavLink to='/'>{t('footerDevelopers')}</NavLink>
                            <NavLink to='/'>{t('footerSecurityCenter')}</NavLink>
                            <NavLink to='/'>{t('footerSiteMap')}</NavLink>
                        </ul>
                    </div>
                    <ul className='flex flex-col gap-3'>
                        <b className='text-base italic pb-5'>{t('footerStayConnected')}</b>
                        <NavLink className='flex gap-3' to='https://www.facebook.com/ebay'>
                            <img src={Facebook} alt="" />
                            Facebook
                        </NavLink>
                        <NavLink className='flex gap-3' to='https://twitter.com/ebay'>
                            <img src={Twitter} alt="" />
                            Twitter
                        </NavLink>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <b className='text-base italic pb-5'>{t('footerAbout')}</b>
                        <NavLink to='/'>{t('footerCompanyInfo')}</NavLink>
                        <NavLink to='/'>{t('footerNews')}</NavLink>
                        <NavLink to='/'>{t('footerInvestors')}</NavLink>
                        <NavLink to='/'>{t('footerCareers')}</NavLink>
                        <NavLink to='/'>{t('footerDiversityInclusion')}</NavLink>
                        <NavLink to='/'>{t('footerGlobalImpact')}</NavLink>
                        <NavLink to='/'>{t('footerGovernmentRelations')}</NavLink>
                        <NavLink to='/'>{t('footerAdvertise')}</NavLink>
                        <NavLink to='/'>{t('footerPolicies')}</NavLink>
                        <NavLink to='/'>{t('footerVeRO')}</NavLink>
                        <NavLink to='/'>{t('footerECILicenses')}</NavLink>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Footer
