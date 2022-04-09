import React from 'react'
import { HomeStyles } from './styles'
import Button from '@mui/material/Button';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../animatedPage';

export default function Home() {
  const navigate = useNavigate()

  return (
    <AnimatedPage>
      <HomeStyles>
        <section className='banner'>
          <div className="content">
            <Typewriter
              options={{
                strings: [
                  'Developed by Angelo Menti',
                  'Authentication JWT',
                  'Facebook, Google and Apple'],
                autoStart: true,
                loop: true,
                delay: 80
              }} />

            <h1>LOGIN AUTHENTICATION</h1>

            <Button
              size='large'
              className='btSignUp'
              variant='outlined'
              onClick={() => navigate("login")}>
              Sign Up
            </Button>
          </div>
        </section>
      </HomeStyles>
    </AnimatedPage>
  )
}

