import React, { useState } from 'react'
import Container from '../../container/Container'
import logo from '../../assets/svg/logo.svg'
import more from '../../assets/svg/more.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import Terms from '../../components/terms/Terms'
import { useTranslation } from 'react-i18next'
import axios from '../../api/axios'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post('/auth/login', { username, password })

      if(response.status !== 200) {
        throw new Error('Login failed. Please check your credentials and try again.')
      } else {
        localStorage.setItem('token', response.data.token)
      }

      Toastify({
        text: "Login successful!",
        duration: 3000,
        close: true,
        gravity: "top", // or "bottom"
        position: "right", // or "left"
        backgroundColor: "#4caf50", // green color
      }).showToast()

      navigate('/')
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.')

      Toastify({
        text: "Login failed. Please check your credentials.",
        duration: 3000,
        close: true,
        gravity: "top", // or "bottom"
        position: "right", // or "left"
        backgroundColor: "#f44336", // red color
      }).showToast()

      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Container>
        <div className='flex justify-between items-center py-3'>
          <img src={logo} alt="" />
          <NavLink className='text-sm text-[#0654BA]' to='/'>{t('loginTellUs')}</NavLink>
        </div>
      </Container>
      <Container>
        <div className='flex flex-col items-center border-b border-b-[#CCCCCC]'>
          <strong className='text-4xl text-[#151E27] italic pb-3'>{t('loginHello')}</strong>
          <span className='text-sm'>{t('loginSignIn')} <NavLink className='text-[#3665F3] border-b border-b-[#3665F3]' to='/register'>{t('loginCreateAccount')}</NavLink></span>
          <div className='w-full max-w-[350px] my-11'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <input
                className='outline-none border border-[#8F8F8F] text-[#000000] py-2 px-3 rounded-lg bg-[#8f8f8f0a]'
                type="text"
                placeholder={t('loginUsernamePlaceholder')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className='outline-none border border-[#8F8F8F] text-[#000000] py-2 px-3 rounded-lg bg-[#8f8f8f0a]'
                type="password"
                placeholder={t('loginPasswordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={16}
                required
              />
              <button
                className='w-full min-h-[40px] py-[14px] rounded-[20px] text-white bg-[#3665F3] hover:bg-transparent hover:border-2 hover:border-[#3665F3] hover:text-[#3665F3]'
                type='submit'
                disabled={loading}
              >
                {loading ? 'Loading...' : t('loginContinue')}
              </button>
              {error && <p className='text-red-500'>{error}</p>}
            </form>
          </div>
          <label className='flex gap-3 mt-28 mb-4'>
            <input type="checkbox" />
            <span>{t('loginStaySignedIn')}</span>
          </label>
          <NavLink className='text-sm text-[#000000] text-center' to='/'>{t('loginPublicDevice')}</NavLink>
          <NavLink className='text-sm text-[#000000] text-center' to='/'>{t('loginUncheckToProtect')}</NavLink>
          <NavLink className='text-sm text-[#3665F3] text-center border-b border-b-[#3665F3] mt-3' to='/'>{t('loginLearnMore')}</NavLink>
          <div className='flex justify-around items-start gap-4 py-5 px-[18px] w-full max-w-[350px] bg-[#3665F3] mt-10'>
            <img src={more} alt="" />
            <p className='text-xs text-white leading-5'>{t('loginInfoText')}</p>
          </div>
        </div>
      </Container>
      <Terms/>
    </>
  )
}

export default Login
