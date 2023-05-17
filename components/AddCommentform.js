"use client"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddCommentform =  ({setShowCommentBox}) => {
    const [name,setUser] = useState('Default')
    const [body,setBody] = useState('')
  
    const addComment = () => {
      setShowCommentBox(false) 
      console.log('something is happening')
      setComments({name:'test',body:'test body'})
    }

    return (
      <>
        <TextField id="filled-basic" label="Comment" variant="filled" required onChange={(e) => setBody(e.target.value)}/> 
        <Button size='large' endIcon={<AddCircleIcon />} onClick={addComment}></Button>
        <br/>
    </>
  )
}

export default AddCommentform