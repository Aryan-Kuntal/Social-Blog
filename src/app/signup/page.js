"use client"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material'

export default function page () {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
    return (
      <>
      <Typography variant="h5" sx={{mt:5,mb:3}}>
        Register New User
      </Typography>
    <Paper elevation={3} sx={{padding:2}}>
        <TextField id="outline-basic" label="Email" variant='outlined' required margin='normal' value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField id="filled-basic" label="Passsword" type='password' variant="outlined" required margin='normal' value={password}  onChange={(e) => setPassword(e.target.value)}/> 
        <Button size='large' endIcon={<SendIcon />}>Post</Button>
    </Paper>
    </>
  )
}

