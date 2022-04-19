import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../animatedPage'
import { BrowseStyles } from './styles'
import { Button, Divider } from '@mui/material'
import { AuthContext } from '../../context/authContext'
import { motion, Variants } from 'framer-motion'
import { Logout } from '@mui/icons-material'

export default function Browse() {
  const { infoLogin, setInfoLogin, authenticated, setAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authenticated) {
      navigate('/login')
    }
  }, [authenticated, navigate])

  const logout = () => {
    setAuthenticated(false)

    navigate("/login")
  }


  if (authenticated) {
    return (
      <BrowseStyles>
        <AnimatedPage>
          <div className="bg">
            <main className='content'>
              <img className='imageProfile' src={infoLogin?.pictureUrl} alt='profile' />

              <h1 className='title'>Name</h1>
              <span>{infoLogin?.name}</span>

              <h1 className='title'>Email</h1>
              <span>{infoLogin?.email}</span>

              <h1 className='title'>UserId</h1>
              <span>{infoLogin?.userId}</span>

              <Button style={{ marginTop: '20px' }} onClick={() => logout()}>LOGOUT</Button>
            </main>

          </div>
        </AnimatedPage>
      </BrowseStyles>

    )
  }

  else {
    return null
  }
}

