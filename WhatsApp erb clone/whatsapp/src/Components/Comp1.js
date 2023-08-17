import React from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import Page1 from './Login/Page1';
import { useContext } from 'react';
import { AccountContext } from '../Context/AccountProvider';
import Chat1 from './Chatinterface/Chat1';


export default function Comp1() {

    const {account} = useContext(AccountContext)

    const CustomAppBar = styled(AppBar)`
  height:140px;
  background-color: rgb(50, 201,152);
  box-shadow: none;
`;



    const CustomBox = styled(Box)`
height: 100vh;
background-color: rgb(30, 30, 30);
`;
    return (
        <>
            <CustomBox>
                { 
                    account ?
                    <> 
                        
                        <Chat1/>
                    </> 
                    :
                    <>
                <CustomAppBar>
                    <Toolbar>

                    </Toolbar>
                </CustomAppBar>

                <Page1 />
                </>
            }   

            </CustomBox>

        </>
    );
}
