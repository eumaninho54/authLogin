import React from 'react'
import AnimatedPage from '../animatedPage';
import { LoginStyles } from './styles';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate()

  return (
    <AnimatedPage>
      <LoginStyles>
        <div className='bg'>
          <div className="content">
            <h1>Faça login em sua conta</h1>

            <a href='' className='socialMidia'>
              <div className="logo" style={{ borderColor: '#425495' }}>
                <FaFacebookF size={20} color='#425495' />
              </div>
              <div className="name" style={{ backgroundColor: '#425495', borderColor: '#425495' }}>
                <span>Login with Facebook</span>
              </div>
            </a>

            <a href='' className='socialMidia'>
              <div className="logo" style={{ borderColor: '#1672E6' }}>
                <FcGoogle size={20}/>
              </div>
              <div className="name" style={{ backgroundColor: '#1672E6', borderColor: '#1672E6' }}>
                <span>Login with Google</span>
              </div>
            </a>

            <a href='' className='socialMidia'>
              <div className="logo" style={{borderColor: 'black'}}>
                <FaApple size={20} color={'black'}/>
              </div>
              <div className="name" style={{backgroundColor: 'white', borderColor: 'black', color: 'black'}}>
                <span>Login with Apple</span>
              </div>
            </a>

            <Button onClick={() => navigate("/")}>VOLTAR</Button>
          </div>
        </div>
      </LoginStyles>
    </AnimatedPage>
  )
}
