import React from 'react'
import Box from '@mui/material/Box';
import Link from "next/link";
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';
import { Typography } from '@mui/material';


function Navbar() {
    const pages = [{ name: 'Create New', url: 'new-post' }]

    return (
        <Box sx={{ display:'flex-container',padding:2, background:'black',alignItems:'center',gap:2}}>
            <Link href={'/'}>
            <Button>
             <Typography variant='h4' sx={{color:'white'}}>
                Social-Blog |
             </Typography>
             </Button>
            </Link>
            {pages.map((page) => (
                <Link href={`/${page.url}`}>
                <Button>
                    <h4 style={{color:'white'}}>{page.name}</h4>
                </Button>
                </Link>    
            ))}

        </Box>
    )
}

export default Navbar