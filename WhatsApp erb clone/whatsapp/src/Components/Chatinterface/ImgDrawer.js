import React from 'react'
import { Drawer, Box, styled, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountContext } from '../../Context/AccountProvider';
import { useContext } from 'react';


export default function ImgDrawer({ open, setOpen }) {

    const {account} =useContext(AccountContext)

    const handleClose = () => { setOpen(false) }
    const draweStyle = { left: 20, top: 17, height: `95%`, width: `30%`, backgroundColor: `rgb(30,30,30)` }
    const TopBox = styled(Box)`color: white; display:flex; background-color: rgb(50,50,50); height: 100px;
    &> svg, &> p{margin-top: auto;padding: 15px;  font-weight: 600} font-size: 18px ;`

    const Box2= styled(Box)`height: 85%; `
    const Pic = styled(Box)`display: flex; justify-content: center;`
    const Image= styled(`img`)({width: 150, height: 150, borderRadius: `50%`, padding: `25px`})
    const Name= styled(Box)`padding: 12px 30px 2px; color: white; `
    const Yn = styled(Typography)`font-size: 13px; color: #009688; font-weight:200;`
    const Na = styled(Typography)`margin: 7px 0px`
    
    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: draweStyle }}
                style={{ zIndex: 1500 }}
            >
                <TopBox>
                    <ArrowBackIcon onClick={()=> setOpen(false)} />
                    <Typography>Profile</Typography>
                </TopBox>
                <Box2>
                    <Pic>
                        <Image src={account.picture}/>
                    </Pic>
                    <Name>
                        <Yn>Your Name</Yn>
                        <Na>{account.name}</Na>
                    </Name>
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                </Box2>
            </Drawer>
        </>
    )
}
