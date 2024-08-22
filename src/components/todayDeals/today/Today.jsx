import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ArrowRight from '../../../assets/svg/arrowRight.svg'

const Today = () => {
    const { t } = useTranslation()
  return (
    <div className='flex gap-6'>
        <span className='text-2xl text-[#191919] italic'>{t("TodayDeals")}</span>
        <NavLink 
            className="flex items-center text-[#191919] gap-2"
            to='/products'>
            {t("seeAll")}
            <img style={{width: '25px', height: '25px'}} src={ArrowRight} alt="" />
        </NavLink>
    </div>
  )
}

export default Today