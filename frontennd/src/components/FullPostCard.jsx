import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button, Box, Avatar, Link as MuiLink } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CommentSection } from './Comment';
import axios from 'axios';
import { ViewAllLikes } from './ViewAllLikes';
import { Superchat } from './Superchat';
import { Link } from 'react-router-dom';
import {DeletePost} from "./DeletePost"

export function FullPostCard({ flag, setFlag, token, author, title, description, image, postId, likeCount, authorId }) {
    const BASE_URL = import.meta.env.VITE_API_URL;
    // const [likes, setLikesName] = useState([]);
    const [toggle, setToggle] = useState(true);
 
    const setLikeCounts = useSetRecoilState(likeCountFamily(postId));
    useEffect(()=>{
        setLikeCounts(likeCount)
    },[])
    
    

    return (
        <Box width="100%"  mx="auto" my={2}>
            {/* Post Card */}
            <Card 
                sx={{ 
                    width: '100%',
                    height: '400px',  // Adjust height as needed
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: 'hidden'
                }}
            >
                {/* Scrollable Content Section */}
                <CardContent sx={{ flex: 1, overflowY: 'auto' }}>
                    {/* Post Title */}
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {title}
                    </Typography>

                    {/* Author Information */}
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <Typography variant="body2" color="textSecondary">
                            Written by
                        </Typography>
                        <MuiLink component={Link} to={`/${authorId}/profile`} color="primary" underline="hover">
                            <Typography variant="subtitle1" fontWeight="medium">
                                {author}
                            </Typography>
                        </MuiLink>
                    </Box>

                    {/* Post Image */}
                    {image && (
                        <CardMedia
                            component="img"
                            height="200"  // Fixed height for image
                            image={image}
                            alt="Post Image"
                            sx={{ borderRadius: 2, objectFit: 'cover', marginBottom: 2 }}
                        />
                    )}

                    {/* Post Description */}
                    <Typography variant="body1" color="textSecondary"  mx={2}>
                        {description}
                    </Typography>
                </CardContent>

            <Box display="flex" alignItems="center" justifyContent="space-between" px={2} pb={2}>
                {/* Like button and likes info */}
                <Box display="flex" alignItems="center" gap={1}>
                    <Button
                        onClick={handleClick}
                        startIcon={<FavoriteIcon />}
                        variant="contained"
                        color="error"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold',
                            paddingY: '6px',
                            paddingX: '16px',
                        }}
                    >
                        Likes: {likeCount}
                    </Button>

                    {likes.length > 0 && (
                        <Typography variant="body2" color="textSecondary" className='hidden md:inline'>
                            Liked by {likes[0].userName}{' '}
                            {likes.length > 1 && `and ${likes.length - 1} others`}
                        </Typography>
                    )}
                </Box>

                {/* Superchat button */}
                <Superchat postId={postId} recipientId={authorId} token={token} />
            </Box>

            {/* Likes View and Comments Section */}
            <Box px={2} pb={2}>
                <ViewAllLikes postId={postId} token={token} setLikesName={setLikesName} toogle={toggle} />
            </Box>

           
            <Box px={2} pb={2}>
                <CommentSection postId={postId} />
            </Box>
        </Box>
    );
}
