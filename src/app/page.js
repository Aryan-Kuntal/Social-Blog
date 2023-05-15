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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PostAddOutlined } from '@mui/icons-material';
import BlogCard from '../../components/BlogCard';

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const req = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
            const data = await req.json()
            setPosts(data)
            
        }

        getPosts()
    }, [])



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
                    <BlogCard post={post}/>
                )
            })}
        </Box>
        </>
    
    )
}
