"use client"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material'

export default function page () {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
  
    return (
      <>
      <Typography variant="h5" sx={{mt:5,mb:3}}>
        Create New Post
      </Typography>
    <Paper elevation={3} sx={{padding:2}}>
        <TextField id="outline-basic" label="Title" variant='outlined' required margin='normal' onChange={(e) => setTitle(e.target.value)}/>
        <TextField id="filled-basic" label="Body" variant="filled" required multiline fullWidth margin='normal' rows={4} onChange={(e) => setBody(e.target.value)}/> 
        <Button size='large' endIcon={<SendIcon />}>Post</Button>
    </Paper>
    </>
  )
}

