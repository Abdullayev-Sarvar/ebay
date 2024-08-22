import Container from '../../container/Container'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const ProductSlice = () => {
    const { t } = useTranslation()
    const { data: ProductSlices, loading, error } = useFetch('products');

    if (loading) {
        return <div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>; 
    }

    if (error) {
        return <div>{t('error')}</div>; 
    }

  return (
    <Container>
        <div className='flex justify-around gap-3 my-10'>
                {Array.isArray(ProductSlices) && ProductSlices.slice(9, 16).map((product) => (
                    <div className='flex max-w-[150px] flex-col text-center bg-white' key={product.id}>
                        <NavLink to='/products'>
                            <img className='w-[150px] h-[150px] bg-zinc-300 rounded-full' src={product.thumbnail} />
                        </NavLink>
                        <b className='text-[14px] text-[#191919] py-4'>{product.title.slice(0, 25)+  "..."} </b>
                    </div>
                ))}
        </div>
    </Container>
  )
}

export default ProductSlice