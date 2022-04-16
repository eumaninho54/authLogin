import React from 'react'
import AnimatedPage from '../animatedPage';
import { LoginStyles } from './styles';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export default function Login() {
  const navigate = useNavigate()
  const REACT_APP_GOOGLE_ID: string = String(process.env.REACT_APP_GOOGLE_ID)
  const REACT_APP_FACEBOOK_ID: string = String(process.env.REACT_APP_FACEBOOK_ID)

  const responseFacebook = () => {

  }

  return (
    <LoginStyles>
      <AnimatedPage>
        <div className='bg'>
          <div className="content">
            <h1>Login your account</h1>

            <FacebookLogin
              appId={REACT_APP_FACEBOOK_ID}
              callback={responseFacebook}
              render={(renderProps: { onClick: React.MouseEventHandler<HTMLElement> }) => (
                <section onClick={renderProps.onClick} className='socialMidia'>
                  <div className="logo" style={{ borderColor: '#425495' }}>
                    <FaFacebookF size={20} color='#425495' />
                  </div>
                  <div className="name" style={{ backgroundColor: '#425495', borderColor: '#425495' }}>
                    <span>Login with Facebook</span>
                  </div>
                </section>
              )} />

            <GoogleLogin
              clientId={REACT_APP_GOOGLE_ID}
              icon={false}
              onSuccess={(response: any) => { 
                window.localStorage.setItem('accessToken', response.accessToken)
                navigate('/browse')
              }}
              render={renderProps => (
                <section onClick={renderProps.onClick} className='socialMidia'>
                  <div className="logo" style={{ borderColor: '#1672E6' }}>
                    <FcGoogle size={20} />
                  </div>

                  <div className="name" style={{ backgroundColor: '#1672E6', borderColor: '#1672E6' }}>
                    <span>Login with Google</span>
                  </div>
                </section>
              )} />

            <section className='socialMidia'>
              <div className="logo" style={{ borderColor: 'black' }}>
                <FaApple size={20} color={'black'} />
              </div>
              <div className="name" style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}>
                <span>Login with Apple</span>
              </div>
            </section>

            <Button style={{ marginTop: '20px' }} onClick={() => navigate("/")}>BACK</Button>
          </div>
        </div>
      </AnimatedPage>
    </LoginStyles>
  )
}
