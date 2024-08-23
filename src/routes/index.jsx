import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./home/Home'))
const Login = lazy(() => import('./login/Login'))
const Products = lazy(() => import('./products/Products'))
const SinglePage = lazy(() => import('./product/SinglePage'))

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
      path: '/single/:id',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}>
        <SinglePage />
      </Suspense>
    }
  ])
}

export default RoutesController