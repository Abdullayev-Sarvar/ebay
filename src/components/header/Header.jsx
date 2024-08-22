import React from 'react'
import AccountControl from './accountControl/AccountControl'
import Navigation from './navigation/Navigation'

const Header = () => {
  return (
    <>
      <AccountControl />
      <div className='h-[1px] w-full max-w-7xl bg-gray-200 mx-auto'></div>
      <Navigation />
    </>
  )
}

export default Header