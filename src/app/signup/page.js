"use client"
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from '../../../hooks/AuthHook'
import { useRouter } from 'next/navigation'

export default function page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasLoaded, setHasLoaded] = useState(false)

  const auth = useAuth()
  const router = useRouter()


  useEffect(() => {
    
    if (auth.user) {
      router.replace('/')
    }
    else {
      setHasLoaded(true)
    }
  })

  return (
    <>
      {hasLoaded
        ? <>
          <Typography variant="h5" sx={{ mt: 5, mb: 3 }}>
            Register New User
          </Typography>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <TextField id="outline-basic" label="Email" variant='outlined' required margin='normal' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <TextField id="filled-basic" label="Passsword" type='password' variant="outlined" required margin='normal' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <Button size='large' startIcon={<PersonIcon />}>Sign Up</Button>
          </Paper>
        </>
        : <p>Please wait....</p>
      }
    </>
  )
}

