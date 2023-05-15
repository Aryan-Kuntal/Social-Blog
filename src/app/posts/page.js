"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const req = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
            const data = await req.json()
            setPosts(data)
            console.log(data)
        }

        getPosts()
    }, [])

    const card = (post) => {
        console.log(post)
        return (
            <>
                <CardContent>
                    <Typography variant="h4" component="div" sx={{mb:2 }}>
                        {post.title}
                    </Typography>
                    <Typography variant="body1">
                        {post.body.substring(0, 50)}...
                    </Typography>
                </CardContent>
                <CardActions >
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon />
                </IconButton>
                   <Link href={`posts/${post.id}`}><Button size="small">Read More</Button></Link>
                </CardActions>
            </>
        )
    }
    return (
        <>
        <Box sx={{display:'flex-container',justifyContent:'center'}}>
            <Typography variant='h1' sx={{mb:2}}>
                All Posts
            </Typography>
        </Box>
        <Box sx={{display:'flex-container',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:10}}>
            {posts.map((post) => {
                return (
                    <Card variant='outlined' sx={{ mb: 1.5,maxWidth: 345,border:'solid 2px',borderRadius:2}}>{card(post)}</Card>
                )
            })}
        </Box>
        </>
    
    )
}
