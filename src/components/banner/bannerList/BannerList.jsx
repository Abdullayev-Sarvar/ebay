import { NavLink } from 'react-router-dom';
import Container from '../../../container/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerList = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="mt-6 BannerList">
        <ul className="flex min-h-[38px] justify-around items-center gap-2 py-2 border-t border-t-[#DDDDDD]">
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/">{t("bannerList1")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/">
              ❤️ {t("bannerList2")}
            </NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("bannerList3")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("electronics")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("collectibles")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("homeGarden")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("fashion")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("toys")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("sportingGoods")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("businessIndustrial")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("jewelryWatches")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/">{t("ebayLive")}</NavLink>
          </li>
          <li className="text-[12px] text-[#555555]">
            <NavLink to="/products">{t("refurbished")}</NavLink>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default BannerList;
