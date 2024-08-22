import React from 'react'
import Container from '../../container/Container'
import Today from './today/Today'
import { NavLink } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const TodayDeals = () => {
  const { data: todayDeals, loading, error } = useFetch('products')

  if (loading) {
    return <div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  const applyDiscount = (price) => (price * 0.8).toFixed(2);

  return (
    <Container>
        <div className='flex flex-col gap-10 my-10'>
            <Today />
            <div className='flex justify-between items-center'>
                {Array.isArray(todayDeals) && todayDeals.slice(0, 8).map((product, index) => {
                    const isDiscounted = (index % 4 === 1 || index % 4 === 2);
                    const finalPrice = isDiscounted ? applyDiscount(product.price) : product.price;

                    return (
                        <div className='flex max-w-[150px] flex-col text-center bg-white' key={product.id}>
                            <NavLink to='/products'>
                                <img className='w-[150px] h-[150px]' src={product.thumbnail} alt={product.title} />
                            </NavLink>
                            <b className='flex flex-col text-start text-[14px] text-[#191919] py-4'>
                                {finalPrice} {isDiscounted ? <span className='text-red-500 line-through'>{product.price}</span> : ''}
                            </b>
                        </div>
                    )
                })}
            </div>
        </div>
    </Container>
  )
}

export default TodayDeals
