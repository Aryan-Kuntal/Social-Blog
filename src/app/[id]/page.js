"use client"
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Comments from '../../../components/Comments';

export default function id() {

    const [post, setPost] = useState({})
    const params = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {

        const id = params.id
        const getPostById = async () => {
            const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
            const data = await req.json()
            setPost(data)
        }

        const getCommentsForPost = async () => {
            const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
            const data = await req.json()
            setComments(data)
        }

        getPostById()
        getCommentsForPost()
    }, [])

    

    return (
        <>
            <Paper elevation={3} sx={{ padding: 2, mb: 10, mt: 10 }}>
                {
                    <>
                        <Typography variant="h4" component="div" sx={{ mb: 4, textAlign: 'center' }}>
                            {post.title}
                        </Typography>
                        <Typography variant="body1" component="div">
                            {post.body}
                        </Typography>
                    </>
                }
                <IconButton aria-label="add to favorites" onClick={() => {('like' in post) ? setPost({...post,like:!post.like}) : setPost({...post,like:true})}} >
                    {(post.like) ? <FavoriteIcon /> : <FavoriteBorderIcon/> }
                </IconButton>
            </Paper>
           <Comments comments={comments} setComments={setComments}/>
            
        </>
    )
}
