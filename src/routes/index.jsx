import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./home/Home'))
const Login = lazy(() => import('./login/Login'))
const Products = lazy(() => import('./products/Products'))
const Product = lazy(() => import('./product/Product'))

const RoutesController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}>
        <Home />
      </Suspense>
    },
    {
      path: '/login',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}>
        <Login />
      </Suspense>
    },
    {
      path: '/products',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}>
        <Products />
      </Suspense>
    },
    {
      path: '/products/:id',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}>
        <Product />
      </Suspense>
    }
  ])
}

export default RoutesController