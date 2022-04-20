import React from 'react'
import { HomeStyles } from './styles'
import Button from '@mui/material/Button';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../animatedPage';

export default function Home() {
  const navigate = useNavigate()

  return (
    <HomeStyles>
      <AnimatedPage>
        <div className="content">
          <Typewriter
            options={{
              strings: [
                'Developed by Angelo Menti',
                'Authentication JWT',
                'Facebook and Google'],
              autoStart: true,
              loop: true,
              delay: 80
            }} />

          <h1>LOGIN AUTHENTICATION</h1>

          <Button
            size='large'
            className='btSignUp'
            variant='outlined'
            onClick={() => navigate(process.env.PUBLIC_URL + "/login")}>
            Sign Up
          </Button>
        </div>
      </AnimatedPage >
    </HomeStyles>
  )
}

