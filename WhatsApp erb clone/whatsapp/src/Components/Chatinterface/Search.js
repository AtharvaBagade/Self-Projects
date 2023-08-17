import React from 'react'
import { Box, styled, InputBase, Icon } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export default function Search({setText}) {
    const Box0 = styled(Box)`background-color: rgb(50,50,50); position: relative; margin: 0 13px; `
    const InputBar = styled(InputBase)` width: 100%; padding-left: 40px;color: white; height: 25px;  `
    const Box1 = styled(Box) `height: 45px; display: flex; align-items: center;`
    const Icon = styled(Box)`position: absolute; height: 100%; padding: 3px;  `
  return (
    <Box>
      <Box0>
        <Icon>
            <SearchIcon fontSize='small'/>
        </Icon>
        <InputBar  placeholder='Search or start new chat'
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setText(e.target.value)}
        />
      </Box0>
    </Box>
  )
}
