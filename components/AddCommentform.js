"use client"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddCommentform =  ({setShowCommentBox}) => {
    const [User,setUser] = useState('Default')
    const [body,setBody] = useState('')
  
    return (
      <>
        <TextField id="filled-basic" label="Comment" variant="filled" required onChange={(e) => setBody(e.target.value)}/> 
        <Button size='large' endIcon={<AddCircleIcon />} onClick={() => setShowCommentBox(false)}></Button>
        <br/>
    </>
  )
}

export default AddCommentform