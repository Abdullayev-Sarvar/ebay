import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='w-full max-w-[1312px] h-full mx-auto px-4 m-2'>
      {children}
    </div>
  )
}

export default Container