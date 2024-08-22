import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../../../assets/svg/cart.svg'
import Notifications from '../../../assets/svg/notifications.svg'
import { useTranslation } from 'react-i18next'

const AccountControl = () => {
  const { t } = useTranslation()
  return (
    <div className='w-full max-w-7xl h-full mx-auto px-4 account-control'>
      <div className='flex justify-between items-center gap-4 py-1 control-wrapper'>
        <div className='control'>
          <ul className='flex items-center gap-3 pr-4'>
            <li className='text-[12px] text-[#000000] font-normal'>
              {t("navHi")}
              <NavLink end className='text-sky-500 border-b border-b-sky-500' to='/register'> {t("navRegister")} </NavLink>
               {t("navOr")} 
              <NavLink end className='text-sky-500 border-b border-b-sky-500' to='/login'> {t("navLogin")} </NavLink>
            </li>
            <li className='text-[12px] text-[#000000] font-normal'>{t("navli2")}</li>
            <li className='text-[12px] text-[#000000] font-normal'>{t("navli3")}</li>
            <li className='text-[12px] text-[#000000] font-normal'>{t("navli4")}</li>
          </ul>
        </div>
        <div className='account'>
          <ul className='flex items-center gap-6'>
            <li className='text-[12px] text-[#000000] font-normal'>{t("navli5")}</li>
            <select className='outline-none text-[12px] text-[#000000] font-normal' id="">
              <option value="list">{t("navli6")}</option>
            </select>
            <select className='outline-none text-[12px] text-[#000000] font-normal' id="">
              <option value="my">{t("navli7")}</option>
            </select>
            <NavLink to='/'>
              <img src={Notifications} alt="" />
            </NavLink>
            <NavLink to='/'>
              <img src={Cart} alt="" />
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AccountControl