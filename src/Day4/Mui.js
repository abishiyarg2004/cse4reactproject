import React, { createRef } from 'react'
import {Button, Stack} from '@mui/material'

const Mui = () => {
  return (
    <Stack direction='row' spacing={2} >
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      
    </Stack>
  )
}

export default Mui
