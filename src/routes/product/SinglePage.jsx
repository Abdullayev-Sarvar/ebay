import React from 'react';
import Terms from '../../components/terms/Terms'
import Container from '../../container/Container';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Product = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

    useEffect(() => {
        axios(`/products/${id}`)
            .then((response) => setProduct(response.data));
    }, [id]);

  if (!product) {
    return <div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>;
  }

  if (!product || Object.keys(product).length === 0) {
    return <div>No product found</div>; 
  }

  return (
    <>
    <Container>
      <div className='flex items-start justify-start gap-36 product-wrapper my-16'>
        {product.thumbnail ? (
          <img className='w-[400px] h-[500px]' src={product.thumbnail} alt={product.title} />
        ) : (
          <div>No image available</div>
        )}
        <div className='flex flex-col gap-3'>
          <NavLink to='/products' className='text-sm text-sky-400'>{t("backToProducts")}</NavLink>
          <strong className='text-xl border-b border-b-[#00000038] pb-3'>{product.title}</strong>
          <div className='flex gap-5'>
            <ul className='flex flex-col text-end'>
              <span className='pb-[68px]'>Condition: </span>
              <span>Name: </span>
              <span className='py-7'>Category: </span>
              <span>Order: </span>
              <span className='py-6'>Tags: </span>
              <span>Price:  </span>
            </ul>
            <ul className='flex flex-col gap-5'>
              <p className=''>{product.description}</p>
              <p className='w-full max-w-[400px] bg-[#EFEFEF] px-1 py-[2px] border border-[#D3D3D3] rounded-md'>{product.title}</p>
              <p className='w-full max-w-[400px] bg-[#EFEFEF] px-1 py-[2px] border border-[#D3D3D3] rounded-md'>{product.category}</p>
              <p className='w-full max-w-[400px] bg-[#EFEFEF] px-1 py-[2px] border border-[#D3D3D3] rounded-md'>{product.minimumOrderQuantity}</p>
              <p className='w-full max-w-[400px] bg-[#EFEFEF] px-1 py-[2px] border border-[#D3D3D3] rounded-md'>{product.tags[0]}, {product.tags[1]}</p>
              <strong className='text-red-500'>US:  ${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</strong>
              <p><strong>Discount: {product.discountPercentage}%</strong></p>
            </ul>
          </div>
          <div className='w-full h-full flex justify-around'>
            <NavLink className='w-[195px] text-[#3665F3] text-sm pl-5' to='/'>No Interest if paid in full in 6 mo on $99+*</NavLink>
            <div className='flex flex-col gap-4'>
              <button className='w-[230px] text-sm bg-[#0053A0] text-white py-[10px] rounded-3xl buyBtn'>Buy it Now</button>
              <button className='w-[230px] text-sm bg-[#3498CA] text-white py-[10px] rounded-3xl buyBtn'>Add to cart</button>
              <button className='w-[230px] text-sm bg-transparent text-[#3665F3] border border-[#3665F3] py-[10px] rounded-3xl buyBtn'>❤️ Add to watch list</button>
            </div>
          </div>
        </div>
      </div>
    </Container>  
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
  );
};

export default Product;
