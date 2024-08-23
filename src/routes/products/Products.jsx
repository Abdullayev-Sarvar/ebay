import React from 'react'
import ProductList from '../../components/ProductList/ProductList'
import Terms from '../../components/terms/Terms'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Products = () => {
  const { t } = useTranslation()
  return (
    <>
    <ProductList />
    <div className='w-full max-w-[1366px] h-full mx-auto px-9 border-t border-t-[#767676]'>
      <ul className='flex gap-5 text-xs text-[#767676] pt-8 my-8'>
        <NavLink to='https://www.ebay.com/'>{t("about_ebay")}</NavLink>
        <NavLink to='/'>{t("announcements")}</NavLink>
        <NavLink to='/'>{t("community")}</NavLink>
        <NavLink to='/'>{t("security_center")}</NavLink>
        <NavLink to='/'>{t("seller_center")}</NavLink>
        <NavLink to='/'>{t("policies")}</NavLink>
        <NavLink to='/'>{t("affiliates")}</NavLink>
        <NavLink to='https://github.com/Abdullayev-Sarvar'>{t("help_contact")}</NavLink>
        <NavLink to='https://www.figma.com/design/XsgNk8iw4ixv1qx3eRCKZX/FINAL-EXAM?node-id=2-479&t=OoAHjZeblrQZ1hNH-0'>{t("site_map")}</NavLink>
      </ul>
    </div>
    <Terms />
    </>
  )
}

export default Products