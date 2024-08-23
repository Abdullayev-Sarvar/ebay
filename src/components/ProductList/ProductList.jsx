import React from 'react'
import ProductBanner from '../../assets/images/ProductBanner.png'
import { useFetch } from '../../hooks/useFetch'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Stars from '../../assets/svg/stars.svg'

const ProductList = () => {
    const {t} = useTranslation()
    const [search, setSearch] = useState("");
    const { data: ProductsList, loading, error } = useFetch('products');

    if (loading) {
        return <div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>; 
    }

    if (error) {
        return <div>{t('error')}</div>; 
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredProducts = ProductsList.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='w-full max-w-[1100px] h-full mx-auto px-4'>
        <div className='flex flex-col mt-8'>
            <b className='italic text-2xl font-normal text-[#333333]'>{t('featured_event')}</b>
            <img className='my-6' src={ProductBanner} alt="" />
            <div className='flex flex-col gap-3 pl-4 border-b border-b-[#707070]'>
                <b className='text-lg text-[#333333]'>{t('up_to_60_off')}</b>
                <span className='text-sm text-[#707070] pb-7'>{t('save_on_apple_products')}</span>
            </div>
        </div>
        <input 
            type="text" 
            onChange={handleSearch} 
            className='w-full border-b border-b-[#707070] py-2 pl-4 outline-none' 
            maxLength={80} 
            placeholder={t('search_placeholder')} >
        </input>
        <div className='flex flex-wrap gap-8 py-10'>
            {Array.isArray(filteredProducts) && filteredProducts.map((product) => (
                    <div className='flex max-w-[240px] flex-col text-start bg-white product' key={product.id}>
                        <NavLink to={`/single/${product.id}`}>
                            <img className='w-[240px] h-[240px] bg-zinc-300 rounded-xl product-image' src={product.thumbnail} />
                        </NavLink>
                        <b className='text-[14px] text-[#191919] py-3'>{product.title} </b>
                        <div className='flex gap-2'>
                            <img src={Stars} alt="" />
                            <small>{product.rating}</small>
                        </div>
                        <b className='italic py-1'>${product.discountPercentage}</b>
                        <span className='line-through'>{t('was')}: ${product.price}</span>
                        <b className='text-red-500 py-2'>
                            {t('now')}: ${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}
                        </b>
                        <strong className='text-[#191919]'>{t('in_stock')}: {product.stock}</strong>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default ProductList