import React, { useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../Context/AccountProvider'
import { Box, styled } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMore from './HeaderMore';
import ImgDrawer from './ImgDrawer';

export default function Header() {
    const [openDr,setOpenDr]= useState(false)
    const toggleDr=()=>{setOpenDr(true)}

    const {account} = useContext(AccountContext)
    const Box0 = styled(Box)`display: flex; align-items: center;height: 22px; background-color: rgb(50,50,50); padding: 8px 16px; margin:5px 0`
    const Icon = styled(Box)`margin-left: auto; &>*{margin-left: 2px;padding:0px 5px; align-item: center;}`

  return (
    <>
    <Box0>
        <img src={account.picture} alt="DP" style={{height: "21px", width: "21px"}} onClick={toggleDr}/>
        <Icon>
           <ChatIcon/>
           <HeaderMore setOpen={setOpenDr}/>
        </Icon>
    </Box0>
    <ImgDrawer open={openDr} setOpen= {setOpenDr}/>
    </>
  )
}
