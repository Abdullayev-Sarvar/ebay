import React from 'react'
import Container from '../../../container/Container'
import ArrowRight from '../../../assets/svg/arrowRight.svg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FirstHero from '../../../assets/images/FirstHero.png'
import SecondHero from '../../../assets/images/SecondHero.png'
import LastHero from '../../../assets/images/LastHero.png'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <div className="flex justify-between bg-[#FEB786] hero">
        <div className='flex flex-col items-start gap-2 max-w-[290px] my-4 mx-8'>
          <span className='text-4xl italic text-[#5C1B05]'>{t("heroTitle")}</span>
          <p className='text-base text-[#5C1B05] mb-5'>{t("heroDescription")}</p>
          <NavLink className='flex items-center gap-2 py-3 px-5 text-base text-[#5C1B05] border border-[#5C1B05] hover:bg-[#5C1B05] hover:text-white' to='/products'>
            {t("heroShopNow")} 
            <img className='hover:hidden' src={ArrowRight} alt="Arrow Right" />
          </NavLink>
        </div>
        <div className='flex pt-5'>
          <NavLink to='/products'><img src={FirstHero} alt="" /></NavLink>
          <NavLink to='/products'><img src={SecondHero} alt="" /></NavLink>
          <NavLink to='/products'><img src={LastHero} alt="" /></NavLink>
        </div>
      </div>
    </Container>
  )
}

export default Hero