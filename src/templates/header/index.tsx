import React from 'react'
import { HeaderStyle } from './styles'
import Divider from '@mui/material/Divider';


export default function Header() {
  return (
    <HeaderStyle>
      <nav className='content'>
        <a href="https://github.com/ymaninho54" className='linkHeader'>Github</a>
        <Divider orientation='vertical' variant='middle' flexItem color='gray'/>
        <h1 className='title'>AuthLogin</h1>
        <Divider orientation='vertical' variant='middle' flexItem color='gray'/>
        <a href="https://www.linkedin.com/in/angelo-menti-663040210/" className='linkHeader'>Linkedin</a>
      </nav>
    </HeaderStyle>
  )
}

