"use client"
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


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

    const generateCommentsList = (comment) => {
        console.log(comment)
        return (<ListItem>
            <ListItemText
                primary={comment.name}
                secondary={comment.body}
            />
        </ListItem>)
    }

    return (
        <>
            <Paper elevation={3} sx={{ padding: 2, mb: 10,mt:10 }}>
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
            </Paper>
            <strong>Comments</strong>
            <hr />
            <List dense={true}>
                {
                    comments.map(comment => generateCommentsList(comment)
                )}
            </List>
        </>
    )
}
