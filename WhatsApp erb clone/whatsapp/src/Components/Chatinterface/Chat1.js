import React from 'react'
import { Dialog, styled, Box, List, ListItem } from '@mui/material'
import Chatlist from './Chatlist'
import  {UserContext} from '../../Context/UserProvider'
import EmptyChat from '../chat/EmptyChat'
import ChatBox from '../chat/ChatBox'
import { useContext } from 'react'

const Chat1 = () => {

    const dialogStyle = { borderRadius: 0, minHeight: "100%", color: `white`, width: "100%", maxWidth: "100%", marginLeft: "20px", marginRight: "20px", marginTop: "15px", marginBottom: "0px", boxShadow: "none", overflow: "hidden" }
    const Box0 = styled(Box)`display: flex;`
    const LeftBox = styled(Box)`min-width: 30%; height: 100%; background-color: rgb(30,30,30)`
    const RightBox = styled(Box)`min-width: 70%; height: 100%;border-left: 1px solid rgb(255,255,255)`

    const { person } = useContext(UserContext);


    
    return (
        <>
            <Dialog open={true} BackdropProps={{ style: { backgroundColor: 'unset' } }}
                PaperProps={{ sx: dialogStyle }}
                maxWidth={'md'}
                hideBackdrop={true}>
                <Box0>
                    <LeftBox>
                        <Chatlist />
                    </LeftBox>
                    <RightBox>
                        {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                    </RightBox>
                </Box0>
            </Dialog>

        </>
    )
}

export default Chat1;