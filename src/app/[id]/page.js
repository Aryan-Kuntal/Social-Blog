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
import { useRouter } from 'next/navigation';


export default function id() {

    const [post, setPost] = useState({})
    const params = useParams()
    const [hasloaded, setHasLoaded] = useState(false)
    const [comments, setComments] = useState([])
    const router = useRouter()

    useEffect(() => {

        const id = params.id

        const getPostById = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

            if (!res.ok) {
                router.push('/404-notfound')
                return 0
            }
            const data = await res.json()

            setPost(data)

            return 1
        }

        const getCommentsForPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
            const data = await res.json()
            setComments(data)
        }

        let result = getPostById().then((val) => {
            if (val === 1){
                setHasLoaded(true)
            }
        })
        getCommentsForPost()
        
    }, [])



    return (
        <>
            {
                hasloaded
                    ? (<>
                        < Paper elevation={3} sx={{ padding: 2, mb: 10, mt: 10 }
                        }>
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
                            <IconButton aria-label="add to favorites" onClick={() => { ('like' in post) ? setPost({ ...post, like: !post.like }) : setPost({ ...post, like: true }) }} >
                                {(post.like) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                        </Paper >
                        <Comments comments={comments} setComments={setComments} />

                    </>)
                    : <p>Loading...</p>
            }
        </>
    )
}
