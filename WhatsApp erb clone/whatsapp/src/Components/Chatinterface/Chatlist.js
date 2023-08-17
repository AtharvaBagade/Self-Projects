import React from 'react'
import Header from './Header'
import { Box, styled } from '@mui/material'
import Search from './Search'
import Conv from './Conv'
import { useState } from 'react'

export default function Chatlist() {

    const [text, setText] = useState('');
  return (
   <>
    <Box>
        <Header/>
        <Search setText={setText}/>
        <Conv text={text}/>
    </Box>
   </>
  )
}
