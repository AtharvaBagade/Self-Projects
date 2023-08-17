    import React from 'react'
    import { Dialog, Box, styled, Typography, List, ListItem } from '@mui/material'
    import { GoogleLogin } from '@react-oauth/google'
    import jwt_decode from 'jwt-decode'
    import { useContext } from 'react'
    import { AccountContext } from '../../Context/AccountProvider'
    import { addUser } from '../../service/api'

    export default function Page1() {
        const {setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext)

        const dialogStyle ={height: "95%", width: "60%",maxWidth:"100%", marginTop: "13%", boxShadow:"none", overflow:"hidden"}
        const Box1 = styled(Box)`display: flex;`
        const Box2 = styled(Box)`padding: 56px 0px 40px 40px`
        const Typo = styled(Typography)`font-family: inherit; font-size: 20px; color: rgb(65,65,65); font-weight: 200; margin-bottom: 20px`
        const Li = styled(List)`font-size: 15px; margin-top: 10px; line-height: 20px; font-style: inherit; font-weight: 200 `
        
        const loginSuccess= async(res)=>{
            const decode = jwt_decode(res.credential); 
            setAccount(decode)
            setShowloginButton(false);
            setShowlogoutButton(true);
            await addUser(decode)
        }
        

        const loginError=()=>{
            console.log('Login Failed:', res);

        }
        return (
            <>
                <Dialog   open={true}  PaperProps={{sx: dialogStyle}} hideBackdrop={true}>

                    <Box1>
                        <Box2>
                            <Typo>Use WhatsApp on your computer :</Typo>
                            <Li>
                                <ListItem>1. Open WhatsApp on your phone</ListItem>
                                <ListItem>2. Open Menu or Settings and select Linked Devices</ListItem>
                                <ListItem>3. Tap on Link a device</ListItem>
                                <ListItem>4. Point your phone to the screen to capture the QR code</ListItem>
                            </Li>
                        </Box2>
                        <Box style={{position: `relative`}}>
                            <img style={{height: 250, width: 250, marginTop: 20}} alt="QR code" src="https://pentestlab.files.wordpress.com/2012/04/qrcode_attack.png"  />
                            <Box style={{position: `absolute`, top:`40%`}}>
                                <GoogleLogin
                                onSuccess={loginSuccess}
                                onError={loginError}
                                />
                            </Box>
                        </Box>
                    </Box1>
                </Dialog>
            </>
        )
    }
