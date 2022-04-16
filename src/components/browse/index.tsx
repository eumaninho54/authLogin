import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Browse() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!window.localStorage.getItem('accessToken')){
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <h1>Salve</h1>
    </div>
  )
}

