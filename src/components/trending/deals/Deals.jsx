import React from 'react'
import DailyDeals from '../../../assets/svg/dailyDeals.svg'
import DealsLogo from '../../../assets/svg/dealsLogo.svg'
import DealsImage from '../../../assets/images/dealsImage.png'
import arrowRight from '../../../assets/svg/arrowRight.svg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Deals = () => {
  const { t } = useTranslation()

  return (
    <div className='flex justify-between gap-4'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-2 py-5 px-6'>
                <small className='text-[#707070]'>{t('dealsFeatured')}</small>
                <img className='w-[120px] h-[48px]' src={DealsLogo} alt="" />
                <span className='text-xl italic text-[#191919] mt-5'>{t('dealsTitle')}</span>
                <p className='text-[14px] text-[#707070] mb-3'>{t('dealsSubtitle')}</p>
                <NavLink className='w-full min-w-[180px] max-w-[22px] flex items-center gap-3 border border-[#000000] py-3 px-4' to='/products'>
                    {t('getYourThing')} 
                    <img src={arrowRight} alt="" />
                </NavLink>
            </div>
            <img className='w-[480px] ml-10' src={DailyDeals} alt="" />
        </div>
        <img src={DealsImage} alt="" />
    </div>
  )
}

export default Deals
