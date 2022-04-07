import React from 'react'
import { HomeStyles } from './styles'
import Button from '@mui/material/Button';
import Typewriter from 'typewriter-effect';




export default function Home() {
  return (
    <HomeStyles>
      <section className='banner'>
        <div className="content">
          <Typewriter
            options={{
              strings: [
                'Developed by Angelo Menti', 
                'Route authentication',
                'Facebook, Google and Apple'],
              autoStart: true,
              loop: true,
              delay: 80,
            }}/>

          <h1>LOGIN AUTHENTICATION</h1>

          <Button size='large' className='btSignUp' variant='outlined'>Sign Up</Button>
        </div>
      </section>
    </HomeStyles>
  )
}

