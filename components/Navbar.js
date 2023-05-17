import React from 'react'
import Box from '@mui/material/Box';
import Link from "next/link";
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useAuth } from '../hooks/AuthHook';


function Navbar() {
    const pages = [{ name: 'Create New', url: 'new-post' }]

    const auth = useAuth()

    return (
        <Box sx={{ display: 'flex-container', padding: 1, background: 'black', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex-container', background: 'black', alignItems: 'center', gap: 1,marginRight:'auto'}}>
            <Link href={'/'}>
                <Button>
                    <Typography variant='h4' sx={{ color: 'white' }}>
                        Social-Blog |
                    </Typography>
                </Button>
            </Link>
            {pages.map((page) => (
                <Link href={`/${page.url}`}>
                    <Button>
                        <h4 style={{ color: 'white' }}>{page.name}</h4>
                    </Button>
                </Link>
            ))}
            </Box>
            <Box sx={{display:'flex-container',background: 'black', alignItems: 'center', gap: 1}}>
            {auth.user 
            ? (<Link href={'/signin'}><Button onClickCapture={() => {auth.signout()}}><h4 style={{ color: 'white' }}>Sign out</h4></Button></Link>) 
            : ( <><Link href={'/signin'}><Button><h4 style={{ color: 'white' }}>Log In</h4></Button></Link>     
            <Link href={'/signup'}><Button><h4 style={{ color: 'white' }}>Sign up</h4></Button></Link> </>)}
            </Box>

        </Box>
    )
}

export default Navbar