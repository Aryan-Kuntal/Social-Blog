import React from 'react'
import AddCommentform from '/home/span69/Desktop/study/nextJS/social-blog/components/AddCommentform.js';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'

const Comments = ({comments,setComments}) => {

    const [showCommentbox, setShowCommentBox] = useState(false)
    
    const generateCommentsList = (comment) => {
        
        return (<ListItem>
            <ListItemText
                primary={comment.name}
                secondary={comment.body}
            />
        </ListItem>)
    }

    return (
        <>
            <strong>Comments</strong>
            <hr />
            <List dense={true}>
                {
                    comments.map(comment => generateCommentsList(comment)
                    )}
                <ListItem>
                    {showCommentbox && <AddCommentform setShowCommentBox={setShowCommentBox} />}
                </ListItem>
                <ListItem>
                    <Button onClick={() => setShowCommentBox(!showCommentbox)}>{`${showCommentbox ? 'Hide Commentbox' : 'Add Comment'}`}</Button>
                </ListItem>
            </List>
        </>
    )
}

export default Comments