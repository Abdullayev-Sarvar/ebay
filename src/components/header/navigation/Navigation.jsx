import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/svg/logo.svg'
import search from '../../../assets/svg/search.svg'
import { useTranslation } from 'react-i18next'

const Navigation = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

  return (
    <div className='w-full max-w-[1300px] h-full mx-auto px-4'>
        <div className='flex justify-between items-center gap-2 py-2'>
            <NavLink to='/'>
                <img src={logo} alt="" />
            </NavLink>
            <select className="flex outline-none text-[12px]">
                <option className="text-[#555555]" value="shop">
                    {t("navByCategory")}
                </option>
            </select>
            <div className='flex gap-2 border-2 border-[#41413F] search'>
                <img className='p-4' src={search} alt="" />
                <input className='outline-none p-2 pr-[310px] border-r-2 border-[#41413f52]' type="text" placeholder={t("searchPlaceholder")} maxLength={50} />
                <select className='outline-none pr-3'>
                    <option defaultValue={"all"} value="all">{t("navCategory")}</option>
                </select>
            </div>
            <button className=' py-[14px] px-12 text-[14px] text-white bg-[#3665F3]'>{t("navBtnSearch")}</button>
            <select 
                id="language-select"
                defaultValue={i18n.language} 
                onChange={changeLanguage}
            >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        </div>
    </div>
  )
}

export default Navigation