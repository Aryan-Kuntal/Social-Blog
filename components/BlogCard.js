import React, { useState } from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BlogCard = ({ post }) => {

    const [like,setLike] = useState(false)

    return (
        <Card variant='outlined' sx={{ mb: 1.5,maxWidth: 345,border:'solid 2px',borderRadius:2}}>
            <CardContent>
                <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                    {post.title}
                </Typography>
                <Typography variant="body1">
                    {post.body.substring(0, 50)}...
                </Typography>
            </CardContent>
            <CardActions >
                <IconButton aria-label="add to favorites" onClick={() => {setLike(!like)}}>
                    {(like) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <Link href={`/${post.id}`}><Button size="small">Read More</Button></Link>
            </CardActions>
        </Card>
    )
}

export default BlogCard