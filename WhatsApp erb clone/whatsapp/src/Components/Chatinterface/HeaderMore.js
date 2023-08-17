import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import styled from 'styled-components';

export default function HeaderMore({setOpen}) {
    const [anchorEl, setAnchorEl] = useState(null); 
    
    const handleClose = () => {
        setAnchorEl(null); 
    };

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget); 
    };

    const MenuOption = styled(MenuItem)` height: 14px; padding: 15px 60px 5px 24px;`
    

    return (
        <>
            <MoreVertIcon onClick={handleOpen} />
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)} 
                onClose={handleClose}
                getContentAnchorEl={null} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuOption onClick={()=>{handleClose(); setOpen(true);}}>Profile</MenuOption>
                
            </Menu>
        </>
    );
}
