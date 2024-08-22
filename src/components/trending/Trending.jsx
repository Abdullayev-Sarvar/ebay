import React from 'react'
import Container from '../../container/Container'
import Deals from './deals/Deals'
import { NavLink } from 'react-router-dom'
import ArrowRight from '../../assets/svg/arrowRight.svg'
import { useTranslation } from 'react-i18next'

const Trending = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <div className="flex flex-col gap-11">
        <div className='flex max-w-[500px] gap-8'>
          <span className='text-2xl text-[#191919] italic'>{t('trendingTitle')}</span>
          <NavLink className='flex items-center gap-4 text-xl text-[#191919]' to='/products'>
            {t('seeAll')} 
            <img style={{width: '25px', height: '25px'}} src={ArrowRight} alt="" />
          </NavLink>
        </div>
        <Deals />
      </div>
    </Container>
  )
}

export default Trending
