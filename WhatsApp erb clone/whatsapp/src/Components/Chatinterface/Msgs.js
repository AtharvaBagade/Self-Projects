import { Box , Typography, styled} from '@mui/material'
import React from 'react'

export default function Msgs() {
    const Empty = styled(Box)`text-align: center; color: white; padding: 30px 0; min-height:100%;`
    const Type = styled(Box)` font-size: 50px; font-weight:300`
    const Image = styled(`img`)({width: 350, margin: `30px 0` , height : 300})
  return (
    <Empty>
        <Image src="https://i.pinimg.com/736x/58/b8/25/58b825f5da9b9b496dc237436c0848b5.jpg"/>
        <Type>WhatsApp Web</Type>
    </Empty>
  )
}
